import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET() {
    const tasks = await prisma.task.findMany({
        include: { user: true, category: true },
    });
    return NextResponse.json(tasks);
}

export async function POST(req: Request) {
    const { title, description, userId, categoryId } = await req.json();
    const task = await prisma.task.create({
        data: {
            title,
            description,
            userId,
            categoryId,
        },
    });
    return NextResponse.json(task);
}
