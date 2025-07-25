# job_portal_project

<h1>💼 Job Portal - Full Stack Project (React + Node.js + MySQL)</h1>

<p>This project is a simple full-stack job portal application where users can register, login, view available jobs, post new jobs, and apply for jobs. It connects a <strong>React frontend</strong>, <strong>Node.js/Express backend</strong>, and a <strong>MySQL database (hosted on Railway)</strong>.</p>

<hr>

<h2>🔧 Tech Stack</h2>
<ul>
  <li><strong>Frontend</strong>: React.js (deployed on Netlify)</li>
  <li><strong>Backend</strong>: Node.js + Express.js (deployed on Railway)</li>
  <li><strong>Database</strong>: MySQL (Railway plugin)</li>
  <li><strong>API</strong>: RESTful endpoints for register, login, jobs, and applications</li>
</ul>

<hr>

<h2>🚀 Project Setup</h2>

<h3>📁 1. Clone and Setup Project</h3>
<pre><code># Clone the repo
git clone https://github.com/GAbber2002/job-portal.git
cd job-portal-project
</code></pre>

<h3>📦 2. Backend Setup (inside /backend)</h3>
<pre><code>npm install
# Create a .env file with the following:
PORT=8080
DB_HOST=yamabiko.proxy.rlwy.net
DB_USER=root
DB_PASSWORD=your_actual_password_here
DB_NAME=railway

# Start server
npm start
</code></pre>

<h3>🌐 3. Frontend Setup (inside /frontend)</h3>
<pre><code>npm install
npm start
</code></pre>

<h3>🛠 4. Build Frontend for Deployment</h3>
<pre><code>npm run build
</code></pre>

<hr>

<h2>🔗 Important URLs</h2>
<ul>
  <li><strong>Backend API</strong>: <code>https://job-portal-production-7c19.up.railway.app</code></li>
  <li><strong>Frontend Live</strong>: <code>https://glistening-starship-a3a03b.netlify.app</code></li>
</ul>

<hr>

<h2>🔑 Main Functionalities</h2>

<h3>✅ User Registration</h3>
<ul>
  <li>Route: <code>POST /api/register</code></li>
  <li>Registers new user to database</li>
</ul>

<h3>✅ User Login</h3>
<ul>
  <li>Route: <code>POST /api/login</code></li>
  <li>Authenticates user</li>
</ul>

<h3>✅ Job Listing</h3>
<ul>
  <li>Route: <code>GET /api/jobs</code></li>
  <li>Returns all jobs</li>
</ul>

<h3>✅ Post Job</h3>
<ul>
  <li>Route: <code>POST /api/jobs</code></li>
  <li>Allows user to add a job with <code>title</code>, <code>description</code>, <code>company</code>, <code>posted_by</code></li>
</ul>

<h3>✅ Apply Job</h3>
<ul>
  <li>Route: <code>POST /applications</code></li>
  <li>Accepts <code>user_id</code>, <code>job_id</code>, and optional <code>resume_url</code></li>
  <li>Redirects to <code>/applied</code> on success</li>
</ul>

<hr>

<h2>📂 Folder Structure</h2>
<pre><code>/job-portal-project
|-- /backend
|   |-- controllers
|   |-- routes
|   |-- config
|   |-- server.js
|   |-- .env
|
|-- /frontend
|   |-- src
|       |-- components
|           |-- Header.js
|           |-- Register.js
|           |-- Login.js
|           |-- PostJob.js
|           |-- ApplyJob.js
|           |-- JobList.js
|           |-- Applied.js
|       |-- App.js
|   |-- public/_redirects
</code></pre>

<hr>

<h2>🌟 Main Highlights</h2>
<ul>
  <li>🎯 Fully connected frontend-backend with deployed API</li>
  <li>🛡 Simple form-based job apply & post</li>
  <li>🎨 Clean header with styled layout</li>
  <li>✅ Routing with React Router</li>
  <li>🔁 State management using <code>useState</code></li>
  <li>🧪 API tested with dummy data & success messages</li>
</ul>

<hr>

---

## 📷 Project Screenshots

### 🏠 Home Page


<img src="frontend/images/homepage.png" >

### 🔐 Ragister Page

<img src="frontend/images/ragisterpage.png" >

### 🔐 Login Page

<img src="frontend/images/logingpage.png" >

### 🔐 Jobs Page

<img src="frontend/images/jobspage.png" >

### 🔐 Post Jobs Page

<img src="frontend/images/jobpostpage.png" >


<h2>📌 Credits</h2>
<p>Created with ❤️ by <strong>[Pravin Rahangdale].</p>


