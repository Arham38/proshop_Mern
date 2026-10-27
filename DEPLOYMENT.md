# Free Deployment Guide (Render + MongoDB Atlas)

Yeh project free of cost deploy karne ka asaan tareeqa:

---

## Step 1: Free MongoDB Database (MongoDB Atlas)

1. [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas) par account banayein (ya login karein).
2. Naya cluster create karein aur **Free (M0)** option select karein.
3. **Database Access** mein ja kar ek database user aur password banayein (maslan: `admin` aur `password123`).
4. **Network Access** mein ja kar `0.0.0.0/0` (Allow Access from Anywhere) add karein taake Render connect ho sake.
5. Cluster ke **Connect** button par click karein -> **Drivers** -> connection string copy karein:
   ```env
   mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/proshop?retryWrites=true&w=majority
   ```

---

## Step 2: Deploy on Render.com (Free)

1. [render.com](https://render.com) par sign up karein (apne GitHub account se connect karein).
2. **New +** button par click karein aur **Web Service** select karein.
3. Apna repository select karein: `Arham38/proshop_Mern`.
4. Settings configure karein:
   - **Name**: `proshop-mern` (ya koi bhi naam)
   - **Region**: Frankfurt / Singapore (apki marzi)
   - **Branch**: `main`
   - **Runtime**: `Node`
   - **Build Command**:
     ```bash
     npm install && npm run build
     ```
   - **Start Command**:
     ```bash
     npm start
     ```
   - **Instance Type**: **Free**

5. **Environment Variables** add karein:
   - `NODE_ENV` = `production`
   - `MONGO_URI` = `apka_mongodb_atlas_connection_string`
   - `JWT_SECRET` = `koi_bhi_strong_secret_key`

6. **Create Web Service** par click karein.
   - Render automatically build karega aur live URL de dega (e.g. `https://proshop-mern.onrender.com`).

---

## Step 3: Sample Data Import (Optional)

Cloud database mein sample products import karne ke liye:
Apne local machine par temporary `.env` file mein `MONGO_URI` ko Atlas connection string se replace karein aur terminal mein run karein:
```bash
npm run data:import
```
Data cloud database mein seed ho jayega!
