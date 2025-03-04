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
        "github": "https://github.com/mvandanareddy/"
    },
   
  "education": [
    {
      "degree": "Bachelor of Technology",
      "school": "Narasimha Reddy Engineering College",
      "year": "2019-2023",
      "gpa": "7.79"
    },
    {
      "degree": "Intermediate Education",
      "school": "Vandana Junior College",
      "year": "2017-2019",
      "percentage": "85%"
    },
    {
      "degree": "SSC",
      "school": "Z.P. High School Muneerabad",
      "year": "2007-2017",
      "gpa": "9.2"
    }
  ],


    "experience": [
        {
            "title": "Software Developer",
            "company": "FlyingFox Labs Pvt Ltd",
            "location": "Hyderabad, India",
            "period": "july 2024 - Present",
            "responsibilities": [
             " Developed and maintained scalable web applications using React, TypeScript, and WordPress." , 
            "Integrated user authentication systems using JWT and OAuth for secure access."  ,
            "Designed intuitive, responsive UI components with Tamagui, enhancing user experience." , 
            "Conducted rigorous testing to ensure application reliability and performance."  ,

            ]
        }
    ],
    "skills": {
        "programming": ["Python", "JavaScript", "TypeScript", "Java"],
        "frameworks": ["React", "Flask" ],
        "frontend": ["HTML/CSS", "JavaScript"],
        "databases": ["SQL","MySQL"],
        "tools": ["Git", "AWS", "Power BI", "Linux"]
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
      "name": "Basic Python Certificate",
      "issuer": "HackerRank",
    },
    {
      "name": "Web Designing Certificate of Assessment",
      "issuer": "TATA Communications",
    },
    {
      "name": "Power BI Certificate",
      "issuer": "TNX",
    }
    ]
}

# Skills data
skills_data = {
    "frontend": [
        {"name": "React"},
        {"name": "TypeScript"},
        {"name": "HTML/CSS"},
        {"name": "JavaScript"},
        {"name": "Tamagui"},
    ],
    "backend": [
        {"name": "Python"},
        {"name": "Flask"},
        {'name':'java'  },
    ],
    "databases": [
        {"name": "MySQL"},
        {"name": "SQL"},
    ],
    "tools": [
        {"name": "Git"},
        {"name": "Linux"},
        {"name": "AWS"},
        {"name":"Power BI"},
    ]
}

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

@app.route('/api/skills', methods=['GET'])
def get_skills():
    return jsonify(skills_data)

print("EMAIL_USER:", os.getenv('EMAIL_USER'))  # Print the email user
print("EMAIL_PASSWORD:", os.getenv('EMAIL_PASSWORD')) 
if __name__ == '__main__':
    app.run(debug=True)