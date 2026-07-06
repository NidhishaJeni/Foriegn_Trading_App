# 💹 Foreign Trading App

## Overview

The Foreign Trading App is a web-based application developed using Spring Boot, MySQL, HTML, CSS, and JavaScript. It provides a simple platform for users to manage foreign currencies and execute currency trades through an easy-to-use interface.

This project was built to strengthen my understanding of full-stack web development, REST APIs, database integration, and CRUD operations using the Spring Boot framework.

---

## Features

### User Management
- User Registration
- User Login
- Profile Page

### Currency Management
- Add New Currency
- Update Exchange Rate
- Delete Currency
- View Available Currencies

### Trade Management
- Execute Currency Trades
- Select Source and Destination Currency
- Automatic Currency Conversion
- View Trade History
- Delete Trades

### Dashboard
- Total Number of Trades
- Total Trading Amount
- Total Converted Amount
- Recent Trade History

### Reports
- Trading Summary
- Overall Trade Statistics

---

## Technologies Used

### Backend
- Java 17
- Spring Boot
- Spring Data JPA
- Spring Security
- Maven

### Frontend
- HTML5
- CSS3
- JavaScript

### Database
- MySQL

### Tools
- VS Code
- Git
- GitHub
- Postman

---

## Project Structure

```
Foreign_Trading_App
│
├── src
│   ├── main
│   │   ├── java
│   │   ├── resources
│   │   │   ├── static
│   │   │   └── application.properties
│   └── test
│
├── .mvn
├── pom.xml
├── mvnw
├── mvnw.cmd
├── .gitignore
└── README.md
```

---

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/NidhishaJeni/Foriegn_Trading_App.git
```

### Create the Database

Create a MySQL database named:

```
trading_db
```

### Configure Database

Update the following values in `application.properties`:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/trading_db
spring.datasource.username=root
spring.datasource.password=YOUR_PASSWORD
```

### Run the Application

Start the Spring Boot application by running:

```
TradingApplication.java
```

Open your browser and visit:

```
http://localhost:8082
```

---

## Screenshots

You can add screenshots of:

- Login Page
- Dashboard
- Trade Management
- Currency Management
- Reports

---

## Future Improvements

I plan to continue improving this project by adding:

- Buy and Sell Trade Types
- Wallet Balance Management
- Live Exchange Rate API Integration
- Profit/Loss Calculation
- Dashboard Charts
- Search and Filter Options
- Export Reports to PDF/Excel
- Admin Dashboard
- Email Notifications

---

## Learning Outcomes

Through this project, I gained practical experience in:

- Building REST APIs using Spring Boot
- Working with MySQL and Spring Data JPA
- Designing relational database models
- Implementing CRUD operations
- Connecting frontend pages with backend APIs
- Using Git and GitHub for version control

---

## Author

**Nidhisha Jeni**

GitHub: https://github.com/NidhishaJeni

---

## License

This project was developed for learning purposes and personal practice.
