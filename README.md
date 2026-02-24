# CARLUX - Elite Vehicle Showroom 🚗✨

CARLUX is a premium, high-performance web application designed for elite vehicle browsing. Built with a focus on luxury aesthetics and seamless user experience, it features a dark-themed, responsive interface that provides detailed information about high-end vehicles.

---

## 🌟 Key Features

- **Premium UI/UX:** A sleek dark theme with burgundy and purple gradients, glassmorphism effects, and smooth micro-animations.
- **Dynamic Inventory:** Real-time car listing fetched from the DummyJSON API.
- **Smart Search & Sort:** Instantly filter vehicles by name or sort by price (High to Low / Low to High).
- **Dynamic Detail Pages:** Dedicated high-fidelity pages for every vehicle with full specifications and image galleries.
- **Ultra-Responsive:** Optimized for everything from mobile phones up to 1600px ultra-wide monitors.
- **Interactive Elements:** Hover effects, glowing indicators for stock status, and customized cursors for better engagement.

---

## 📁 Project Structure

```text
carlux-frontend/
├── app/                      # Next.js App Router
│   ├── cars/[id]/            # Dynamic Route for Vehicle Detail Pages
│   │   └── page.js           # Vehicle Detail Logic & UI
│   ├── globals.css           # Global Styles & Custom Design System
│   ├── layout.js             # Root Layout with Fonts & Metadata
│   └── page.js               # Homepage (Inventory Listing)
├── components/               # Modular UI Components
│   └── inventory/
│       ├── CarCard.js        # Card Component for individual vehicles
│       ├── Footer.js         # Site-wide Footer
│       ├── Navbar.js         # Responsive Navigation with Desktop/Mobile views
│       ├── SearchSort.js     # Filter and Sort controllers
│       ├── SkeletonLoader.js # Loading state UI
│       └── ErrorMessage.js   # API Error handling UI
├── hooks/                    # Custom React Hooks
│   └── useInventory.js       # Data Fetching, Filtering & Sorting logic
└── public/                   # Static assets
```

---

## 🛠️ Technology Stack & Rationale

| Tech | Purpose | Why? |
| :--- | :--- | :--- |
| **Next.js 15+** | Framework | Provides fast Page Routing, SEO optimization, and Image handling. |
| **Tailwind CSS v4** | Styling | Utility-first CSS for rapid development and consistent spacing. |
| **Lucide React** | Icons | Minimalist and professional stroke icons. |
| **DummyJSON API** | Data Source | Provides a reliable and fast source for vehicle product data. |
| **React Hooks** | State Management | `useMemo` and `useState` used for efficient sorting and filtering without re-renders. |

---

## ⚙️ Working Process

### 1. Data Integration
The app uses a custom hook `useInventory.js` to fetch data from `https://dummyjson.com/products/category/vehicle`. It handles the raw data and provides filtered/sorted results to the UI.

### 2. Design System
We implemented a custom design system in `globals.css` using CSS variables. We used a "Grid Background" combined with "Radial Glows" to create a premium atmosphere. Due to Tailwind v4's strict preflight, we used a hybrid of **Tailwind utility classes** and **Inline Styles** to guarantee pixel-perfect spacing and responsiveness.

### 3. Responsive Logic
- **Mobile (<640px):** Cards switch to a horizontal layout to save vertical space. The Search/Sort bar becomes a compact single row.
- **Tablet (640px - 1024px):** Navbar switches to a Hamburger Menu to prevent overcrowding.
- **Extra Large (1600px+):** The grid expands to 4 columns to utilize the large screen real estate.

### 4. Navigation
Used Next.js `Link` components for instant, client-side transitions between the Showroom and Detail pages, ensuring no page refresh and a "Mobile App" feel.

---

## 🚀 How to Run Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Pullock4981/carlux.git
   ```

2. **Navigate to the frontend folder:**
   ```bash
   cd carlux/carlux-frontend
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser:**
   Visit `http://localhost:3000` to see the Magic. 🌟

---

## ☁️ Deployment
This project is deployment-ready for **Vercel**. 
- No environment variables are required.
- Set the `Root Directory` to `carlux-frontend` during the Vercel setup.

---

*Made with Antigravity for CARLUX.*
