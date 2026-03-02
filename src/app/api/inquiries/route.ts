import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const DATA_FILE = path.join(process.cwd(), 'src/lib/inquiries.json');

// Helper to read inquiries
function readInquiries() {
    try {
        const data = fs.readFileSync(DATA_FILE, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        return [];
    }
}

// Helper to write inquiries
function writeInquiries(inquiries: any[]) {
    fs.writeFileSync(DATA_FILE, JSON.stringify(inquiries, null, 2), 'utf8');
}

export async function GET() {
    console.log("GET /api/inquiries");
    const inquiries = readInquiries();
    return NextResponse.json(inquiries);
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, service, message } = body;

        console.log("POST /api/inquiries received:", { name, email, service });

        if (!name || !email || !service || !message) {
            console.warn("POST /api/inquiries: Missing required fields");
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const newInquiry = {
            id: Date.now().toString(),
            name,
            email,
            service,
            message,
            date: new Date().toISOString(),
        };

        const inquiries = readInquiries();
        inquiries.unshift(newInquiry); // Add to the beginning
        writeInquiries(inquiries);

        console.log("POST /api/inquiries: Success");
        return NextResponse.json(newInquiry, { status: 201 });
    } catch (error) {
        console.error("POST /api/inquiries: Error", error);
        return NextResponse.json({ error: 'Failed to process inquiry', details: error instanceof Error ? error.message : String(error) }, { status: 500 });
    }
}
