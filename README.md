# 🌤️ Breeze

**Breeze** is a minimal and responsive weather search application that allows users to check the weather conditions of cities around the world. Built with performance and simplicity in mind, it leverages modern React tools and best practices.

## 🚀 Features

- Search weather by city and country
- Responsive and accessible design
- Modular and reusable components
- Loading spinner while fetching data
- Validation for API responses using Valibot
- Real-time error handling and user alerts
- Typed with TypeScript for better developer experience

## 🛠️ Tech Stack

- **React** with **Vite**
- **TypeScript**
- **Axios** – for HTTP requests
- **Valibot** – for schema validation
- **React Spinner** – for loading feedback
- **CSS Modules** – for styling components

## 🧱 Project Structure

```
src/
components/
├── Alert/
│   ├── Alert.tsx
│   └── Alert.module.css
├── Form/
│   ├── Form.tsx
│   └── Form.module.css
├── NotFound/
│   ├── NotFound.tsx
│   └── NotFound.module.css
├── WeatherDetails/
│   ├── WeatherDetails.tsx
│   └── WeatherDetails.module.css
├── data/
│   └── countries.ts
├── hooks/
│   └── useWeather.ts
├── types/
│   └── index.ts
├── utils/
│   └── index.ts
├── App.tsx
└── main.tsx
```

## 🌍 Environment Variables

To run this project, you need to set up your environment variables in a `.env.local` file:

```env.local
VITE_API_KEY=your_weather_api_key
```

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Diego3128/breeze.git
   cd breeze
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## 🖼️ Demo

Check out the live version [https://time-breeze.netlify.app/](#)

## 📝 License

This project is licensed under the MIT License.

---

