-- CreateTable
CREATE TABLE `user` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `Age` INTEGER NOT NULL,
    `Country` VARCHAR(255) NOT NULL,
    `Email` VARCHAR(255) NOT NULL,
    `Mobile` VARCHAR(255) NOT NULL,
    `Name` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;