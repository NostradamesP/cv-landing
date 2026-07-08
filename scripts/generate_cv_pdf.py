from __future__ import annotations

from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.pdfbase.pdfmetrics import stringWidth
from reportlab.platypus import KeepTogether, Paragraph, SimpleDocTemplate, Spacer, Table, TableStyle


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "public" / "CV_Eduardo_Rojas_Velasquez.pdf"

NAVY = colors.HexColor("#0a1628")
NAVY_2 = colors.HexColor("#0f1f3d")
BLUE = colors.HexColor("#3b82f6")
BLUE_2 = colors.HexColor("#60a5fa")
TEXT = colors.HexColor("#0f172a")
MUTED = colors.HexColor("#64748b")
BORDER = colors.HexColor("#dbe4f0")
SOFT = colors.HexColor("#f8fafc")


def money_text(text: str) -> str:
    return text.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")


def make_styles():
    styles = getSampleStyleSheet()
    styles.add(
        ParagraphStyle(
            name="ResumeTitle",
            parent=styles["Title"],
            fontName="Helvetica-Bold",
            fontSize=22,
            leading=26,
            textColor=colors.white,
            spaceAfter=2,
        )
    )
    styles.add(
        ParagraphStyle(
            name="ResumeSubtitle",
            parent=styles["BodyText"],
            fontName="Helvetica",
            fontSize=9.1,
            leading=11.2,
            textColor=colors.HexColor("#cbd5e1"),
        )
    )
    styles.add(
        ParagraphStyle(
            name="ResumeSection",
            parent=styles["Heading2"],
            fontName="Helvetica-Bold",
            fontSize=12.6,
            leading=15,
            textColor=TEXT,
            spaceBefore=6,
            spaceAfter=4,
        )
    )
    styles.add(
        ParagraphStyle(
            name="ResumeBody",
            parent=styles["BodyText"],
            fontName="Helvetica",
            fontSize=8.8,
            leading=11.4,
            textColor=TEXT,
            spaceAfter=2.8,
        )
    )
    styles.add(
        ParagraphStyle(
            name="ResumeMuted",
            parent=styles["BodyText"],
            fontName="Helvetica",
            fontSize=8.8,
            leading=11,
            textColor=MUTED,
        )
    )
    styles.add(
        ParagraphStyle(
            name="ResumeChip",
            parent=styles["BodyText"],
            fontName="Helvetica-Bold",
            fontSize=7.4,
            leading=9,
            textColor=BLUE,
            alignment=TA_LEFT,
        )
    )
    styles.add(
        ParagraphStyle(
            name="ResumeRole",
            parent=styles["Heading3"],
            fontName="Helvetica-Bold",
            fontSize=10.6,
            leading=12.4,
            textColor=TEXT,
            spaceAfter=1,
        )
    )
    return styles


def chip(text: str, width: float = 0):
    pad_x = 5.5 * mm
    pad_y = 2.0 * mm
    content_width = width or stringWidth(text, "Helvetica-Bold", 8) + pad_x * 2
    return Table(
        [[Paragraph(text, STYLES["ResumeChip"])]],
        colWidths=[content_width],
        rowHeights=[9.5 * mm],
        style=TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, -1), colors.white),
                ("BOX", (0, 0), (-1, -1), 0.7, colors.HexColor("#cfe0fb")),
                ("LEFTPADDING", (0, 0), (-1, -1), 5),
                ("RIGHTPADDING", (0, 0), (-1, -1), 5),
                ("TOPPADDING", (0, 0), (-1, -1), 1.5),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 1.5),
                ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
            ]
        ),
    )


def section_title(title: str):
    return Paragraph(title, STYLES["ResumeSection"])


def divider():
    return Table(
        [[""]],
        colWidths=[170 * mm],
        rowHeights=[0.3 * mm],
        style=TableStyle([("BACKGROUND", (0, 0), (-1, -1), colors.HexColor("#cbd5e1"))]),
    )


def bullet_paragraph(text: str):
    return Paragraph(f"&bull; {money_text(text)}", STYLES["ResumeBody"])


def role_block(role, company, meta, bullets, chips_text):
    flow = [
        Paragraph(role, STYLES["ResumeRole"]),
        Paragraph(f"{money_text(company)}", STYLES["ResumeBody"]),
        Paragraph(f"<font color='{MUTED.hexval()}'>{money_text(meta)}</font>", STYLES["ResumeMuted"]),
    ]
    flow.append(Spacer(1, 1.5 * mm))
    flow.extend(bullet_paragraph(item) for item in bullets)
    flow.append(Spacer(1, 1.5 * mm))
    if chips_text:
        chip_tables = []
        row = []
        for index, label in enumerate(chips_text, 1):
            row.append(chip(label))
            if index % 4 == 0:
                chip_tables.append(row)
                row = []
        if row:
            chip_tables.append(row)
        for chip_row in chip_tables:
            flow.append(
                Table(
                    [chip_row],
                    style=TableStyle([("LEFTPADDING", (0, 0), (-1, -1), 0), ("RIGHTPADDING", (0, 0), (-1, -1), 0)]),
                )
            )
            flow.append(Spacer(1, 2))
    return KeepTogether(flow)


def contact_cell(label: str, value: str):
    return Table(
        [
            [
                Paragraph(
                    f"<font size='7.3' color='#94a3b8'>{money_text(label)}</font><br/><font size='9.1' color='#ffffff'><b>{money_text(value)}</b></font>",
                    STYLES["ResumeBody"],
                )
            ]
        ],
        style=TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, -1), NAVY_2),
                ("BOX", (0, 0), (-1, -1), 0.5, colors.HexColor("#1e3a5f")),
                ("LEFTPADDING", (0, 0), (-1, -1), 7),
                ("RIGHTPADDING", (0, 0), (-1, -1), 7),
                ("TOPPADDING", (0, 0), (-1, -1), 6),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 6),
                ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
            ]
        ),
    )


STYLES = make_styles()


def build_pdf():
    doc = SimpleDocTemplate(
        str(OUTPUT),
        pagesize=A4,
        leftMargin=16 * mm,
        rightMargin=16 * mm,
        topMargin=14 * mm,
        bottomMargin=14 * mm,
        title="Eduardo Rojas Velasquez - Resume",
        author="Eduardo Rojas Velasquez",
        subject="Resume",
    )

    story = []

    story.append(Spacer(1, 16 * mm))

    contact_table = Table(
        [
            [contact_cell("Location", "Santo Domingo, Dominican Republic"), contact_cell("Email", "norascript@gmail.com")],
            [contact_cell("Website", "eduardo-cv.pages.dev"), contact_cell("LinkedIn", "linkedin.com/in/eduardo-velasquez-437a3422a")],
        ],
        colWidths=[87 * mm, 87 * mm],
        style=TableStyle(
            [
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                ("TOPPADDING", (0, 0), (-1, -1), 0),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
                ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
            ]
        ),
    )
    story.append(contact_table)
    story.append(Spacer(1, 5))

    story.append(section_title("Professional Summary"))
    story.append(divider())
    story.append(
        Paragraph(
            money_text(
                "Versatile IT professional with hands-on experience in technical support, infrastructure administration, "
                "and full-stack development. Currently supporting a school environment with Fortinet firewalls, Active Directory, "
                "ManageEngine, and Mosyle MDM while also building production applications across Firebase, Supabase, Cloudflare, "
                "Docker, Flutter, React, Fastify, PostgreSQL, and Godot. Security-minded, automation-driven, and focused on shipping "
                "clean systems that solve real problems."
            ),
            STYLES["ResumeBody"],
        )
    )

    story.append(Spacer(1, 2.2 * mm))
    story.append(section_title("Core Strengths"))
    story.append(divider())
    strengths = [
        "IT support, endpoint management, and network troubleshooting",
        "Fortinet firewall administration and secure access design",
        "Full-stack product delivery with React, Flutter, Fastify, and PostgreSQL",
        "Cloud deployment with Firebase, Supabase, Cloudflare, and Docker",
        "Automation with n8n, Python, and API integrations",
        "Security-focused implementation with RBAC, JWT, and CSP",
    ]
    strength_table = Table(
        [[bullet_paragraph(item)] for item in strengths],
        colWidths=[173 * mm],
        style=TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, -1), colors.white),
                ("BOX", (0, 0), (-1, -1), 0.6, BORDER),
                ("INNERGRID", (0, 0), (-1, -1), 0.3, BORDER),
                ("LEFTPADDING", (0, 0), (-1, -1), 7),
                ("RIGHTPADDING", (0, 0), (-1, -1), 7),
                ("TOPPADDING", (0, 0), (-1, -1), 5),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 5),
            ]
        ),
    )
    story.append(strength_table)

    story.append(Spacer(1, 2.8 * mm))
    story.append(section_title("Technical Skills"))
    story.append(divider())

    skills_rows = [
        ["Languages", "Dart, JavaScript, TypeScript, Python, SQL, GDScript, Java"],
        ["Frontend", "Flutter, React 18, Tailwind CSS, Vite, HTML5/CSS3, vanilla JS"],
        ["Backend", "Fastify, Node.js, Firebase, Supabase, REST APIs, WebSockets"],
        ["DevOps & Cloud", "Docker, Cloudflare Pages/Workers, GitHub Actions, CI/CD pipelines"],
        ["Databases", "PostgreSQL, Firestore, Supabase, SQLite"],
        ["IT Support", "Hardware troubleshooting, Google Workspace Admin, ManageEngine, Mosyle MDM"],
        ["Security", "Fortinet, VLAN, MSS clamping, VPN, JWT, bcrypt, CSP, RBAC"],
        ["Tools", "Git, VS Code, Postman, Figma, Adobe Suite, Jira, ServiceDesk"],
    ]
    skills_table = Table(
        [[Paragraph(f"<b>{money_text(k)}</b>", STYLES["ResumeBody"]), Paragraph(money_text(v), STYLES["ResumeBody"])] for k, v in skills_rows],
        colWidths=[30 * mm, 143 * mm],
        style=TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, -1), colors.white),
                ("BOX", (0, 0), (-1, -1), 0.7, BORDER),
                ("INNERGRID", (0, 0), (-1, -1), 0.35, BORDER),
                ("LEFTPADDING", (0, 0), (-1, -1), 7),
                ("RIGHTPADDING", (0, 0), (-1, -1), 7),
                ("TOPPADDING", (0, 0), (-1, -1), 5),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 5),
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
            ]
        ),
    )
    story.append(skills_table)

    story.append(Spacer(1, 3.5 * mm))
    story.append(section_title("Professional Experience"))
    story.append(divider())
    story.append(
        role_block(
            "IT Support Specialist",
            "Carol Morgan School",
            "Jul 2025 - Present | On-site | Santo Domingo, DR",
            [
                "Deliver frontline support to 200+ faculty, staff, and students across hardware, software, and network issues.",
                "Manage Fortinet FortiGate firewalls, including VLAN segmentation, MSS clamping, VPN tunnels, firewall policies, and traffic shaping.",
                "Administer Active Directory, user and group management, GPO, organizational units, and account lifecycle.",
                "Maintain endpoint management via ManageEngine Endpoint Central and ServiceDesk, plus Mosyle MDM and Google Workspace Admin.",
                "Built Sharks Launchpad, a faculty CMS portal used daily by school staff, with Firebase and Cloudflare.",
            ],
            ["Fortinet", "Active Directory", "ManageEngine", "Mosyle MDM"],
        )
    )
    story.append(Spacer(1, 3 * mm))
    story.append(
        role_block(
            "Full-Stack Developer & Software Architect",
            "Self-Employed",
            "2022 - Present | Remote",
            [
                "FactuRD: full invoicing platform with Fastify, TypeScript, React, Tailwind, and PostgreSQL/Supabase-backed multi-tenant workflows.",
                "Digital Signage Platform: real-time screen pairing, Redis caching, JWT auth, MinIO S3, and Dockerized deployment.",
                "Mini Studio Web: multi-track audio workstation built with Flutter and Web Audio API, including waveform rendering and WAV export.",
                "NoraHR: production Kanban system with Gantt charts, SLA tracking, real-time chat, and GitHub Actions CI/CD.",
                "AI video pipeline: n8n-orchestrated automation using OpenAI and Gemini APIs.",
            ],
            ["React", "Flutter", "Fastify", "PostgreSQL", "n8n"],
        )
    )

    story.append(Spacer(1, 3.5 * mm))
    story.append(section_title("Notable Outcomes"))
    story.append(divider())
    story.append(
        Table(
            [[bullet_paragraph(item)] for item in [
                "FactuRD: my most complete application so far, built for tax-compliant invoicing and multi-tenant operations.",
                "Sharks Launchpad: daily-use faculty CMS portal for Carol Morgan School.",
                "Mini Studio Web: a polished cross-platform DAW that connects creative audio work with production engineering.",
                "EventPro Jinaite: events platform with RBAC, real-time data, and Cloudflare deployment.",
            ]],
            colWidths=[173 * mm],
            style=TableStyle(
                [
                    ("BACKGROUND", (0, 0), (-1, -1), colors.white),
                    ("BOX", (0, 0), (-1, -1), 0.6, BORDER),
                    ("INNERGRID", (0, 0), (-1, -1), 0.3, BORDER),
                    ("LEFTPADDING", (0, 0), (-1, -1), 7),
                    ("RIGHTPADDING", (0, 0), (-1, -1), 7),
                    ("TOPPADDING", (0, 0), (-1, -1), 5),
                    ("BOTTOMPADDING", (0, 0), (-1, -1), 5),
                ]
            ),
        )
    )

    story.append(Spacer(1, 3.5 * mm))
    story.append(section_title("Education"))
    story.append(divider())
    story.append(Paragraph("<b>Systems Engineering</b>", STYLES["ResumeBody"]))
    story.append(Paragraph("Universidad Autonoma de Santo Domingo (UASD) - Santo Domingo, DR", STYLES["ResumeBody"]))
    story.append(Paragraph("Expected 2028", STYLES["ResumeMuted"]))

    story.append(Spacer(1, 3 * mm))
    story.append(section_title("Selected Projects"))
    story.append(divider())
    project_rows = [
        ["FactuRD", "Tax-compliant invoicing platform with multi-tenant workflows, PDF generation, and secure auth."],
        ["Sharks Launchpad", "Faculty CMS portal built for Carol Morgan School using Firebase and Cloudflare."],
        ["Mini Studio Web", "Cross-platform audio workstation with multi-track editing, waveform rendering, and WAV export."],
        ["Digital Signage", "Real-time screen pairing, caching, Dockerized deployment, and JWT-secured access."],
    ]
    project_table = Table(
        [[Paragraph(f"<b>{money_text(name)}</b>", STYLES["ResumeBody"]), Paragraph(money_text(desc), STYLES["ResumeBody"])] for name, desc in project_rows],
        colWidths=[38 * mm, 135 * mm],
        style=TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, -1), colors.white),
                ("BOX", (0, 0), (-1, -1), 0.7, BORDER),
                ("INNERGRID", (0, 0), (-1, -1), 0.35, BORDER),
                ("LEFTPADDING", (0, 0), (-1, -1), 7),
                ("RIGHTPADDING", (0, 0), (-1, -1), 7),
                ("TOPPADDING", (0, 0), (-1, -1), 5),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 5),
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
            ]
        ),
    )
    story.append(project_table)

    story.append(Spacer(1, 3 * mm))
    story.append(section_title("Languages"))
    story.append(divider())
    story.append(Paragraph("Spanish (Native) | English (Professional Proficiency)", STYLES["ResumeBody"]))

    def page_background(canvas, doc):
        canvas.saveState()
        width, height = A4
        canvas.setFillColor(NAVY)
        canvas.rect(0, height - 28 * mm, width, 28 * mm, stroke=0, fill=1)
        canvas.setFillColor(BLUE)
        canvas.rect(0, height - 1.8 * mm, width, 1.8 * mm, stroke=0, fill=1)
        if doc.page == 1:
            canvas.setFillColor(colors.white)
            canvas.setFont("Helvetica-Bold", 24)
            canvas.drawString(16 * mm, height - 17 * mm, "Eduardo Rojas Velasquez")
            canvas.setFont("Helvetica", 10)
            canvas.setFillColor(colors.HexColor("#cbd5e1"))
            canvas.drawString(16 * mm, height - 24 * mm, "IT Support Specialist & Full-Stack Developer")
            canvas.setStrokeColor(colors.HexColor("#1e3a5f"))
            canvas.setLineWidth(0.8)
            canvas.line(16 * mm, height - 26.5 * mm, 72 * mm, height - 26.5 * mm)
        canvas.setStrokeColor(colors.HexColor("#d7e2f0"))
        canvas.setLineWidth(0.3)
        canvas.line(16 * mm, 12 * mm, width - 16 * mm, 12 * mm)
        canvas.setFont("Helvetica", 8)
        canvas.setFillColor(MUTED)
        canvas.drawRightString(width - 16 * mm, 8 * mm, f"Page {doc.page}")
        canvas.restoreState()

    doc.build(story, onFirstPage=page_background, onLaterPages=page_background)


if __name__ == "__main__":
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    build_pdf()
    print(f"Wrote {OUTPUT}")
