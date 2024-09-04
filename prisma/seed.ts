import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    const user = await prisma.user.create({
        data: {
            email: 'john.doe@example.com',
            name: 'John Doe',
            tasks: {
                create: [
                    {
                        title: 'Buy groceries',
                        description: 'Milk, Bread, Eggs, Cheese',
                    },
                    {
                        title: 'Read a book',
                        description: 'Finish reading Sapiens',
                    },
                ],
            },
        },
    });

    const category = await prisma.category.create({
        data: {
            name: 'Personal',
            tasks: {
                connect: [{ id: 1 }, { id: 2 }],
            },
        },
    });

    console.log({ user, category });
}

main()
    .then(() => prisma.$disconnect())
    .catch((e) => {
        console.error(e);
        prisma.$disconnect();
    });
