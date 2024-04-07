import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  const john = await prisma.user.upsert({
    where: { email: "john@openstarter.dev" },
    update: {},
    create: {
      email: "john@openstarter.dev",
      name: "John Doe",
      password: "$2a$12$oFPjsI3zfjN7v.V6UhpY4u/2z91Hkl9C12Ci8y9qmXMFZLRj6cAsa", // Password123#
    },
  });

  console.log({ john });
};

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
