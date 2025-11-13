---
date: '2025-11-13'
title: 'Microservices, Explained to a 10 Year Old (and How to Build One)'
slug: '/posts/microservices-for-kids'
tags:
  - Architecture
  - Microservices
  - Kids
  - DevOps
  - Docker
description: 'A simple, example-driven explanation of microservices for beginners and kids, with a tiny how-to.'
draft: false
---

Imagine you and your friends want to build a big toy city together.  
You each take care of one part — maybe the **park**, the **school**, the **pizza shop**, or the **fire station**.  
You can build and fix your part whenever you want, without asking everyone else to stop playing.

That’s the main idea behind **microservices**.

---

## What is a Monolith?

A **monolith** is like one giant Lego city built by one person, where every building, road, and car are stuck together.  
If you want to fix the pizza shop, you might need to move the school, the park, and maybe the entire road!  
It works fine at first, but when the city grows, every little fix becomes a big deal.

---

## What are Microservices?

Microservices split the city into **smaller neighborhoods**, each with its own gate and mailbox.  
The pizza shop doesn’t have to ask the whole city before baking pizza — it just talks to whoever it needs (like the school, to deliver lunch).

Each microservice:
- Has its own code, database, and responsibility.  
- Can use different “toys” (languages or tools).  
- Can break without crashing the whole city.

That means if the pizza shop’s oven breaks, the school still teaches and the park still plays music.

---

## Why People Like Microservices (in kid words)

- 🧩 **Many builders can work together** — each on their own part.  
- 🩹 **Fix one piece** without breaking everything.  
- 🚀 **Grow faster** — you can make busy parts (like pizza delivery) bigger without touching the others.

---

## Why Microservices Can Be Harder

- 🛣️ You need good **roads** (communication between services).  
- ⏱️ If one friend takes too long to reply, the others might have to wait.  
- 📋 You need clear **rules and names** so nobody gets lost or builds the same thing twice.

---

## Grown-Up Section: How to Set Up a Simple Microservices System

Let’s say you want to build a tiny system with two services:
1. 🍕 **Pizza Service** – handles orders.
2. 🏫 **School Service** – keeps track of students.

Both need to talk sometimes (e.g., when students order pizza).

---

### Step 1: Plan the Neighborhoods

Write down what each part does:
```text
pizza-service:
  - POST /order
  - GET /orders
  - talks to school-service to check if student exists

school-service:
  - GET /students
  - POST /students
````

This helps everyone know their role before building.

---

### Step 2: Create Each Service

Let’s use **Node.js + Express** for both.

#### 🍕 pizza-service

```bash
mkdir pizza-service && cd pizza-service
npm init -y
npm install express
```

Create `index.js`:

```js
import express from 'express';
const app = express();
app.use(express.json());

app.get('/orders', (req, res) => res.json([{ id: 1, item: 'Cheese Pizza' }]));
app.post('/order', (req, res) => res.json({ message: 'Order placed!' }));

app.listen(4000, () => console.log('🍕 Pizza service running on port 4000'));
```

#### 🏫 school-service

```bash
mkdir school-service && cd school-service
npm init -y
npm install express
```

Create `index.js`:

```js
import express from 'express';
const app = express();
app.use(express.json());

app.get('/students', (req, res) => res.json([{ id: 1, name: 'Alex' }]));
app.post('/students', (req, res) => res.json({ message: 'Student added!' }));

app.listen(5000, () => console.log('🏫 School service running on port 5000'));
```

---

### Step 3: Run Them Together (Like Neighbors)

Now both services can run at once:

```bash
node pizza-service/index.js
node school-service/index.js
```

They’re now **two independent houses** in your city!

Try visiting:

* `http://localhost:4000/orders`
* `http://localhost:5000/students`

---

### Step 4: Connect Them (Communication)

Now let the pizza shop ask the school for a student’s record before placing an order.

In `pizza-service/index.js`:

```js
import axios from 'axios'; // install with: npm install axios

app.post('/order', async (req, res) => {
  const student = await axios.get('http://localhost:5000/students');
  res.json({ message: 'Order placed by', student: student.data[0] });
});
```

Now your microservices are talking! 🎉

---

### Step 5: Add Docker (Move Each House Into Its Own Box)

Each service can live in its own container, so they don’t bump into each other.

**pizza-service/Dockerfile**

```dockerfile
FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
CMD ["node", "index.js"]
EXPOSE 4000
```

**school-service/Dockerfile**

```dockerfile
FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
CMD ["node", "index.js"]
EXPOSE 5000
```

---

### Step 6: Use Docker Compose (To Run the City)

Create a `docker-compose.yml` in the parent folder:

```yaml
version: '3'
services:
  pizza-service:
    build: ./pizza-service
    ports:
      - "4000:4000"
  school-service:
    build: ./school-service
    ports:
      - "5000:5000"
```

Then start everything with:

```bash
docker compose up
```

Now both services start together — your mini microservice system is live!

---

## Real-World Tips (For Grown-Ups)

* 🔍 Add a **health check** (`/health`) to every service.
* 🧭 Use an **API gateway** (like Kong or Nginx) to route messages.
* 📨 Use **message queues** (like RabbitMQ or Kafka) for heavy communication.
* 📦 Store logs centrally (e.g., ELK or Grafana).
* ⚙️ Use CI/CD to auto-deploy updates for each service independently.

---

## When to Pick Which Style

* 🏗 **Start small (monolith)** if you’re still experimenting.
* 🏙 **Go microservices** when your team or traffic grows and you need separation.
* 🚦 Don’t split too early — too many pieces can slow you down.

---

## The Final Thought

Microservices are like letting many friends build a big city together.
You can build faster, fix things easier, and scale parts independently —
but you’ll need clear roads, strong rules, and teamwork so all the neighborhoods fit together perfectly.

---