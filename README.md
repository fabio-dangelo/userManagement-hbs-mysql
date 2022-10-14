# USER MANAGEMENT HBS MYSQL

## Ressources

- [Simple User Management System github](https://github.com/RaddyTheBrand/Nodejs-UserManagement-Express-Hbs-MySQL)

- [Simple User Management System raddy.dev](https://raddy.dev/blog/simple-user-management-system-nodejs-express-mysql-handlebars/)

#### Replaced Dependencies from User Management Tutorial

- express-handlebars for hbs
- mysql for mysql2

### Added

- [Express browser reload github](https://github.com/cassiolacerda/express-browser-reload)

- [Express browser reload dev.to](https://dev.to/cassiolacerda/automatically-refresh-the-browser-on-node-express-server-changes-x1f680-1k0o)

### Dependencies

- [express github](https://github.com/expressjs/express)
- [morgan github](https://github.com/expressjs/morgan)
- [hbs github](https://github.com/pillarjs/hbs)
- [dotenv github](https://github.com/motdotla/dotenv)
- [mysql2 github](https://github.com/sidorares/node-mysql2)
- [nodemon github](https://github.com/remy/nodemon)
- [livereload github](https://github.com/napcs/node-livereload)

### CDN

- [bootstrap icons getbootstrap.com](https://icons.getbootstrap.com/#install)

## Installation

```bash
npm install
```

```bash
npm start
```

### Developement

```bash
npm run watch
```

## Create .env file

```dotenv
DB_HOST = localhost
DB_NAME = usermanagement_tut
DB_USER = root
DB_PASS = password
```

## MySQL

- MacOS Homebrew

```bash
brew services start mysql
```

```bash
brew services stop mysql
```

- Create Database

```sql
CREATE DATABASE usermanagement_tut;
```

- Create Table

```sql
CREATE TABLE `usermanagement_tut`.`user` ( `id` INT NOT NULL AUTO_INCREMENT , `first_name` VARCHAR(45) NOT NULL , `last_name` VARCHAR(45) NOT NULL , `email` VARCHAR(45) NOT NULL , `phone` VARCHAR(45) NOT NULL , `comments` TEXT NOT NULL , `status` VARCHAR(10) NOT NULL DEFAULT 'active' , PRIMARY KEY (`id`)) ENGINE = InnoDB;
```

- Create User

**CLI SQL ERROR INSERT INTO user**

```ERROR
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near '' at line 17
```

**WORKED WITH VS CODE EXTENSION**

- [MySQL SHELL for VS Code marktplace.visualstudio.com](https://marketplace.visualstudio.com/items?itemName=Oracle.mysql-shell-for-vs-code)

```sql
INSERT INTO `user`
(`id`, `first_name`,  `last_name`,   `email`,                 `phone`,         `comments`, `status`) VALUES
(NULL, 'Amanda',      'Nunes',        'anunes@ufc.com',        '012345 678910', '',          'active'),
(NULL, 'Alexander',   'Volkanovski',  'avolkanovski@ufc.com',  '012345 678910', '',          'active'),
(NULL, 'Khabib',      'Nurmagomedov', 'knurmagomedov@ufc.com', '012345 678910', '',          'active'),
(NULL, 'Kamaru',      'Usman',        'kusman@ufc.com',        '012345 678910', '',          'active'),
(NULL, 'Israel',      'Adesanya',     'iadesanya@ufc.com',     '012345 678910', '',          'active'),
(NULL, 'Henry',       'Cejudo',       'hcejudo@ufc.com',       '012345 678910', '',          'active'),
(NULL, 'Valentina',   'Shevchenko',   'vshevchenko@ufc.com',   '012345 678910', '',          'active'),
(NULL, 'Tyron',       'Woodley',      'twoodley@ufc.com',      '012345 678910', '',          'active'),
(NULL, 'Rose',        'Namajunas ',   'rnamajunas@ufc.com',    '012345 678910', '',          'active'),
(NULL, 'Tony',        'Ferguson ',    'tferguson@ufc.com',     '012345 678910', '',          'active'),
(NULL, 'Jorge',       'Masvidal ',    'jmasvidal@ufc.com',     '012345 678910', '',          'active'),
(NULL, 'Nate',        'Diaz ',        'ndiaz@ufc.com',         '012345 678910', '',          'active'),
(NULL, 'Conor',       'McGregor ',    'cmcGregor@ufc.com',     '012345 678910', '',          'active'),
(NULL, 'Cris',        'Cyborg ',      'ccyborg@ufc.com',       '012345 678910', '',          'active'),
(NULL, 'Tecia',       'Torres ',      'ttorres@ufc.com',       '012345 678910', '',          'active'),
(NULL, 'Ronda',       'Rousey ',      'rrousey@ufc.com',       '012345 678910', '',          'active'),
(NULL, 'Holly',       'Holm ',        'hholm@ufc.com',         '012345 678910', '',          'active'),
(NULL, 'Joanna',      'Jedrzejczyk ', 'jjedrzejczyk@ufc.com',  '012345 678910', '',          'active')
```

