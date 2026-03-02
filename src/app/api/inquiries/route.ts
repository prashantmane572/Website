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
    const inquiries = readInquiries();
    return NextResponse.json(inquiries);
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, service, message } = body;

        if (!name || !email || !service || !message) {
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

        return NextResponse.json(newInquiry, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to process inquiry' }, { status: 500 });
    }
}
