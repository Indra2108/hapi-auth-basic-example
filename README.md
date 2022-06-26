# hapi-auth-basic-example

HapiJS Authentication using [@hapi/basic](https://hapi.dev/module/basic/) as Basic Auth, and use SequelizeORM and MySQL for Registering users

## Additional Requirement
- `DBeaver` or `MySQL Workbench` => *View Database with query* 
- `mysqld` >= 8.0 => *make sure you have mysql installed in your system*
- `Insomnia` or `Postman` => *API Tester*

## How to run

- Clone repo
```
git clone https://github.com/Indra2108/hapi-auth-basic-example.git
cd hapi-auth-basic-example
npm install
```

- Run project
```
npm run test
```

<!-- ## Usage

- Running MySQL service (Linux)
    ```
    sudo systemctl start mysqld
    ```
    make sure the mysqld running properly with command `systemctl status mysqld`
    ```
    [indra@fedora ~]$ systemctl status mysqld
    ● mysqld.service - MySQL 8.0 database server
        Loaded: loaded (/usr/lib/systemd/system/mysqld.service; disabled; vendor preset: disabled)
        Active: active (running) since Sat 2022-06-25 11:32:05 WIB; 1 day 1h ago
    Main PID: 12122 (mysqld)
        Status: "Server is operational"
        Tasks: 42 (limit: 6708)
        Memory: 66.4M
            CPU: 5min 5.476s
        CGroup: /system.slice/mysqld.service
                └─ 12122 /usr/libexec/mysqld --basedir=/usr

    Jun 25 11:31:51 fedora systemd[1]: Starting mysqld.service - MySQL 8.0 database server...
    Jun 25 11:32:05 fedora systemd[1]: Started mysqld.service - MySQL 8.0 database server.
```

- Go to `MySQL Workbench` or `DBeaver` 

Create new sql query -->
