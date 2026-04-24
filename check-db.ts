import 'dotenv/config';
import prisma from './src/lib/db';

async function main() {
  try {
    const users = await prisma.user.findMany();
    console.log('--- USUARIOS EN LA BD ---');
    console.table(users.map(u => ({ id: u.id, name: u.name, email: u.email })));
    console.log(`Total: ${users.length}`);
  } catch (error) {
    console.error('Error al consultar la BD:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
