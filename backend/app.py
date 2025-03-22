from flask import Flask, request, jsonify, send_file
from flask_cors import CORS
from flask_mail import Mail, Message

from io import BytesIO
import os
from dotenv import load_dotenv
from data.resume_data import resume_data, skills_data
from utils.pdf_generate import create_resume_pdf
load_dotenv()

app = Flask(__name__)

# Configure CORS to allow all origins
CORS(app, resources={
    r"/*": {
        "origins": "*",
        "methods": ["GET", "POST", "OPTIONS"],
        "allow_headers": ["Content-Type"]
    }
})

# Email configuration
app.config.update(
    MAIL_SERVER='smtp.gmail.com',
    MAIL_PORT=587,
    MAIL_USE_TLS=True,
    MAIL_USERNAME=os.getenv('EMAIL_USER'),
    MAIL_PASSWORD=os.getenv('EMAIL_PASSWORD'),
    MAIL_DEFAULT_SENDER=os.getenv('EMAIL_USER')
)

mail = Mail(app)

@app.route('/')
def home():
    return jsonify({
        "message": "Welcome to the Portfolio API",
        "endpoints": {
            "resume": "/api/resume",
            "contact": "/api/contact",
            "skills": "/api/skills"
        }
    })

@app.route('/api/resume', methods=['GET'])
def get_resume():
    return jsonify(resume_data)

@app.route('/api/contact', methods=['GET', 'POST', 'OPTIONS'])
def contact():
    if request.method == 'OPTIONS':
        response = jsonify({'status': 'OK'})
        response.headers.add('Access-Control-Allow-Methods', 'POST')
        response.headers.add('Access-Control-Allow-Headers', 'Content-Type')
        return response

    if request.method == 'POST':
        try:
            data = request.get_json()
            
            if not data:
                return jsonify({"error": "No data provided"}), 400

            name = data.get('name', '')
            email = data.get('email', '')
            subject = data.get('subject', 'New Contact Form Submission')
            message = data.get('message', '')

            if not all([name, email, message]):
                return jsonify({"error": "Missing required fields"}), 400

            msg = Message(
                subject=f"Portfolio Contact: {subject}",
                sender=app.config['MAIL_USERNAME'],
                recipients=[app.config['MAIL_USERNAME']],
                body=f"""
                New message from your portfolio website:
                
                From: {name}
                Email: {email}
                
                Message:
                {message}
                """
            )

            mail.send(msg)
            
            return jsonify({"message": "Message sent successfully!"})

        except Exception as e:
            print(f"Error processing request: {e}")
            return jsonify({"error": str(e)}), 500

    return jsonify({"message": "Contact endpoint is working"}), 200

@app.route('/api/skills', methods=['GET'])
def get_skills():
    return jsonify(skills_data)

@app.route('/api/download-resume')
def download_resume():
    try:
        pdf_buffer = create_resume_pdf(resume_data)
        return send_file(
            pdf_buffer,
            download_name='Vandana_Madhireddy_Resume.pdf',
            as_attachment=True,
            mimetype='application/pdf'
        )
    except Exception as e:
        import traceback
        print(f"Error generating PDF: {str(e)}")
        print("Traceback:")
        print(traceback.format_exc())  # This will print the full error traceback
        return jsonify({"error": f"Failed to generate resume: {str(e)}"}), 500

print("EMAIL_USER:", os.getenv('EMAIL_USER'))  # Print the email user
print("EMAIL_PASSWORD:", os.getenv('EMAIL_PASSWORD')) 
if __name__ == '__main__':
    app.run(debug=True)