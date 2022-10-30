-- CreateTable
CREATE TABLE "polos" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "polos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "students" (
    "enrollment" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "polo_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "students_pkey" PRIMARY KEY ("enrollment")
);

-- CreateIndex
CREATE UNIQUE INDEX "polos_name_key" ON "polos"("name");

-- CreateIndex
CREATE UNIQUE INDEX "students_email_key" ON "students"("email");

-- AddForeignKey
ALTER TABLE "students" ADD CONSTRAINT "students_polo_id_fkey" FOREIGN KEY ("polo_id") REFERENCES "polos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
