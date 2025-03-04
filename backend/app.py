from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_mail import Mail, Message
import os
from dotenv import load_dotenv

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

# Resume data
resume_data = {
    "personal_info": {
        "name": "Vandana Madhireddy",
        "title": "Software Developer",
        "email": "madhireddyvandana@gmail.com",
        "phone": "+91 9573925314",
        "location": "Hyderabad, India",
        "linkedin": "https://linkedin.com/in/vandana-madhireddy-31661a241",
        "github": "https://github.com/yourgithub"
    },
    "education": [
        {
            "degree": "B.Tech in Computer Science",
            "school": "Your University Name",
            "year": "2019-2023",
            "gpa": "8.5/10"
        }
    ],
    "experience": [
        {
            "title": "Software Developer",
            "company": "Company Name",
            "location": "Hyderabad, India",
            "period": "2023 - Present",
            "responsibilities": [
                "Developed and maintained web applications using React and Flask",
                "Implemented RESTful APIs and microservices",
                "Collaborated with cross-functional teams to deliver projects"
            ]
        }
    ],
    "skills": {
        "programming": ["Python", "JavaScript", "TypeScript", "Java"],
        "frameworks": ["React", "Flask", "Node.js", "Express"],
        "databases": ["PostgreSQL", "MongoDB", "MySQL"],
        "tools": ["Git", "Docker", "AWS", "Jenkins"]
    },
    "projects": [
        {
            "name": "E-commerce Platform",
            "description": "Built a full-stack e-commerce platform using React and Flask",
            "technologies": ["React", "Flask", "PostgreSQL"],
            "github": "https://github.com/yourusername/project1"
        }
    ],
    "certifications": [
        {
            "name": "AWS Certified Cloud Practitioner",
            "issuer": "Amazon Web Services",
            "date": "2023"
        }
    ]
}

@app.route('/')
def home():
    return jsonify({
        "message": "Welcome to the Portfolio API",
        "endpoints": {
            "resume": "/api/resume",
            "contact": "/api/contact"
        }
    })

@app.route('/api/resume', methods=['GET'])
def get_resume():
    return jsonify(resume_data)

@app.route('/api/contact', methods=['GET', 'POST', 'OPTIONS'])
def contact():
    # Handle OPTIONS request for CORS preflight
    if request.method == 'OPTIONS':
        response = jsonify({'status': 'OK'})
        response.headers.add('Access-Control-Allow-Methods', 'POST')
        response.headers.add('Access-Control-Allow-Headers', 'Content-Type')
        return response

    # Handle POST request
    if request.method == 'POST':
        try:
            data = request.get_json()
            
            if not data:
                return jsonify({"error": "No data provided"}), 400

            name = data.get('name', '')
            email = data.get('email', '')
            subject = data.get('subject', 'New Contact Form Submission')
            message = data.get('message', '')

            # Validate required fields
            if not all([name, email, message]):
                return jsonify({"error": "Missing required fields"}), 400

            # Create the email message
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

            # Send the email
            mail.send(msg)
            
            return jsonify({"message": "Message sent successfully!"})

        except Exception as e:
            print(f"Error processing request: {e}")
            return jsonify({"error": str(e)}), 500

    # Handle GET request
    return jsonify({"message": "Contact endpoint is working"}), 200

if __name__ == '__main__':
    app.run(debug=True)