from reportlab.lib import colors
from reportlab.lib.pagesizes import letter
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import inch
from io import BytesIO

def create_resume_pdf(resume_data):
    buffer = BytesIO()
    doc = SimpleDocTemplate(buffer, pagesize=letter,
                            rightMargin=72, leftMargin=72,
                            topMargin=72, bottomMargin=72)
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

    normal_style = styles['Normal']

    # Personal Information
    personal_info = resume_data.get('personal_info', {})
    story.append(Paragraph(personal_info.get('name', 'N/A'), title_style))
    story.append(Paragraph(personal_info.get('title', 'N/A'), styles['Heading2']))
    story.append(Spacer(1, 20))

    # Contact Information
    contact_info = [
        ["Email:", personal_info.get('email', 'N/A')],
        ["Phone:", personal_info.get('phone', 'N/A')],
        ["Location:", personal_info.get('location', 'N/A')],
        ["LinkedIn:", personal_info.get('linkedin', 'N/A')],
        ["GitHub:", personal_info.get('github', 'N/A')]
    ]

    t = Table(contact_info, colWidths=[1.5 * inch, 4 * inch])
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
    for edu in resume_data.get('education', []):
        edu_text = f"<b>{edu.get('degree', 'N/A')}</b><br/>{edu.get('school', 'N/A')}<br/>{edu.get('year', 'N/A')} | GPA: {edu.get('gpa', 'N/A')}"
        story.append(Paragraph(edu_text, normal_style))
        story.append(Spacer(1, 10))

    story.append(Spacer(1, 10))

    # Experience
    story.append(Paragraph("Experience", heading_style))
    for exp in resume_data.get('experience', []):
        header = f"<b>{exp.get('title', 'N/A')}</b> | {exp.get('company', 'N/A')}<br/>{exp.get('location', 'N/A')} | {exp.get('period', 'N/A')}"
        story.append(Paragraph(header, normal_style))
        for resp in exp.get('responsibilities', []):
            story.append(Paragraph(f"&bull; {resp}", normal_style))
        story.append(Spacer(1, 10))

    # Skills
    story.append(Paragraph("Skills", heading_style))
    for category, skills in resume_data.get('skills', {}).items():
        skills_text = f"<b>{category.title()}:</b> {', '.join(skills)}"
        story.append(Paragraph(skills_text, normal_style))
        story.append(Spacer(1, 5))
    story.append(Spacer(1, 10))

    # Projects
    story.append(Paragraph("Projects", heading_style))
    for project in resume_data.get('projects', []):
        project_text = (
            f"<b>{project.get('name', 'N/A')}</b><br/>"
            f"&bull; {project.get('description', 'N/A')}<br/>"
            f"&bull; Technologies: {', '.join(project.get('technologies', []))}<br/>"
            f"&bull; GitHub: {project.get('github', 'N/A')}"
        )
        story.append(Paragraph(project_text, normal_style))
        story.append(Spacer(1, 10))

    # Certifications
    story.append(Paragraph("Certifications", heading_style))
    for cert in resume_data.get('certifications', []):
        cert_text = f"&bull; {cert.get('name', 'N/A')} | {cert.get('issuer', 'N/A')}"
        story.append(Paragraph(cert_text, normal_style))

    doc.build(story)
    buffer.seek(0)
    return buffer
