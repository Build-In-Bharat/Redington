import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

const pdfUrls = {
    'work-magic': "https://redingtoningram.s3.eu-north-1.amazonaws.com/wetransfer_probu_ebook_en-us_partner_redington-pdf_2024-09-26_1010/Win11_Pro_M365_WorkMagic_FY24_Q2_WW_EN_Infographic_WorkMagic_Redington.pdf",
    'ai-copilot': "https://redingtoningram.s3.eu-north-1.amazonaws.com/wetransfer_probu_ebook_en-us_partner_redington-pdf_2024-09-26_1010/PROBU_ebook_EN-US_Partner_Redington.pdf",
    'case-study': "https://redingtoningram.s3.eu-north-1.amazonaws.com/wetransfer_probu_ebook_en-us_partner_redington-pdf_2024-09-26_1010/WINCOMPOM_CaseStudy_EN-US_Partner_Redington.pdf"
};

export async function GET(
    request: NextRequest,
    { params }: { params: { pdfKey: string } }
) {
    const pdfKey = params.pdfKey;
    const pdfUrl = pdfUrls[pdfKey as keyof typeof pdfUrls];

    if (!pdfUrl) {
        return NextResponse.json({ error: 'Invalid PDF key' }, { status: 400 });
    }

    try {
        const response = await axios.get(pdfUrl, {
            responseType: 'arraybuffer'
        });

        const headers = new Headers();
        headers.set('Content-Type', 'application/pdf');
        headers.set('Content-Disposition', `attachment; filename=${pdfKey}.pdf`);

        return new NextResponse(response.data, {
            status: 200,
            headers: headers,
        });
    } catch (error) {
        console.error('Error downloading PDF:', error);
        return NextResponse.json({ error: 'Failed to download PDF' }, { status: 500 });
    }
}