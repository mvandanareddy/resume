from reportlab.lib import colors
from reportlab.lib.pagesizes import letter
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import inch
from io import BytesIO
from data.resume_data import resume_data, skills_data

def create_resume_pdf(resume_data):
    buffer = BytesIO()
    doc = SimpleDocTemplate(buffer, pagesize=letter)
    styles = getSampleStyleSheet()
    story = []

    # Custom styles
    title_style = ParagraphStyle(
        'CustomTitle',
        parent=styles['Heading1'],
        fontSize=24,
        spaceAfter=30,
        alignment=1
    )
    
    heading_style = ParagraphStyle(
        'CustomHeading',
        parent=styles['Heading2'],
        fontSize=16,
        spaceAfter=12,
        textColor=colors.HexColor('#1a56db')
    )

    # Personal Information
    personal_info = resume_data['personal_info']
    story.append(Paragraph(personal_info['name'], title_style))
    story.append(Paragraph(personal_info['title'], styles['Heading2']))
    story.append(Spacer(1, 20))
    
    # Contact Information
    contact_info = [
        ["Email:", personal_info['email']],
        ["Phone:", personal_info['phone']],
        ["Location:", personal_info['location']],
        ["LinkedIn:", personal_info['linkedin']],
        ["GitHub:", personal_info['github']]
    ]
    
    t = Table(contact_info, colWidths=[1.5*inch, 4*inch])
    t.setStyle(TableStyle([
        ('TEXTCOLOR', (0, 0), (-1, -1), colors.black),
        ('ALIGN', (0, 0), (-1, -1), 'LEFT'),
        ('FONTNAME', (0, 0), (-1, -1), 'Helvetica'),
        ('FONTSIZE', (0, 0), (-1, -1), 10),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 12),
    ]))
    story.append(t)
    story.append(Spacer(1, 20))

    # Education
    story.append(Paragraph("Education", heading_style))
    for edu in resume_data['education']:
        edu_text = f"""
        <para>
        <b>{edu['degree']}</b><br/>
        {edu['school']}<br/>
        {edu['year']} | GPA: {edu.get('gpa', '')}
        </para>
        """
        story.append(Paragraph(edu_text, styles['Normal']))
    story.append(Spacer(1, 20))

    # Experience
    story.append(Paragraph("Experience", heading_style))
    for exp in resume_data['experience']:
        exp_text = f"""
        <para>
        <b>{exp['title']}</b> | {exp['company']}<br/>
        {exp['location']} | {exp['period']}<br/>
        """
        for resp in exp['responsibilities']:
            exp_text += f"• {resp}<br/>"
        exp_text += "</para>"
        story.append(Paragraph(exp_text, styles['Normal']))
    story.append(Spacer(1, 20))

    # Skills
    story.append(Paragraph("Skills", heading_style))
    for category, skills in resume_data['skills'].items():
        skills_text = f"""
        <para>
        <b>{category.title()}:</b> {', '.join(skills)}
        </para>
        """
        story.append(Paragraph(skills_text, styles['Normal']))
    story.append(Spacer(1, 20))

    # Projects
    story.append(Paragraph("Projects", heading_style))
    for project in resume_data['projects']:
        project_text = f"""
        <para>
        <b>{project['name']}</b><br/>
        • {project['description']}<br/>
        • Technologies: {', '.join(project['technologies'])}<br/>
        • GitHub: {project['github']}
        </para>
        """
        story.append(Paragraph(project_text, styles['Normal']))
    story.append(Spacer(1, 20))

    # Certifications
    story.append(Paragraph("Certifications", heading_style))
    for cert in resume_data['certifications']:
        cert_text = f"""
        <para>
        • {cert['name']} | {cert['issuer']}
        </para>
        """
        story.append(Paragraph(cert_text, styles['Normal']))

    doc.build(story)
    buffer.seek(0)
    return buffer