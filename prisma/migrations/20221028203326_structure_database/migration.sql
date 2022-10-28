-- CreateTable
CREATE TABLE `polos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `polos_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `students` (
    `enrollment` INTEGER NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `polo_id` INTEGER NOT NULL,

    UNIQUE INDEX `students_email_key`(`email`),
    PRIMARY KEY (`enrollment`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `students` ADD CONSTRAINT `students_polo_id_fkey` FOREIGN KEY (`polo_id`) REFERENCES `polos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
