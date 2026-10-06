# 🚌 Bus Booking & Administration Portal

This is a modern, enterprise-grade Bus Booking and Administration Management application built using **Angular v22 (Standalone Components)**. The application handles two primary states: **Pre-Login (Authentication Layer)** and **Post-Login (Administrative Workspace System)** utilizing a dual-layout architecture pattern.

---

## 🛠️ Global Architecture & Agent Rules

When generating code, screens, or logic for this project, the **Cursor Agent must strictly adhere** to the following implementation instructions:

### 1. Architectural Rules
* **Strict Standalone Components:** Do not create or look for Angular Modules (`NgModule`). Every component, directive, and pipe must be explicitly declared as `standalone: true`.
* **Signal-Driven State:** Prioritize Angular Signals (`signal`, `computed`, `effect`) for managing local component UI state, data loading flags, and reactive values over standard variables.
* **Component Imports Strategy:** When a generated component requires forms, routing, or utility elements, explicitly include them in its `imports: [...]` array (e.g., `ReactiveFormsModule`, `CommonModule`, `RouterLink`).
* **UI styling Framework:** Use standard raw CSS (or Tailwind/Bootstrap if added later). Write semantic layout selectors using clean Flexbox or Grid. Avoid mixing global style elements into local components.

### 2. Angular v22 CLI Execution Context
* **Node.js Compatibility Engine:** Running under **Node v22.22.3** runtime framework rules.
* **Modern HTTP Mechanisms:** Use `HttpClient` which routes via native **Fetch API** configurations inside the root engine layer.

---

## 📂 System Folder Directory Structure

Keep all features, layouts, and system-wide services strictly separated by their functional domain matching this exact structure:

```text
src/app/
├── core/                         # Single-instance system infrastructure
│   ├── guards/                   # Route protection (e.g., auth.guard.ts)
│   ├── interceptors/             # Token injection (e.g., jwt.interceptor.ts)
│   └── services/                 # Communications (auth.service.ts, api.service.ts)
│
├── layouts/                      # Page layout wrapper architectures
│   ├── auth-layout/              # Layout-free frame wrapper for Login/Register
│   └── admin-layout/             # Dynamic Shell Framework (Header, Sidenav, Footer)
│       ├── header/               # Top-level action navigation component
│       ├── sidenav/              # Left panel links trigger list component
│       └── footer/               # Structural base info banner component
│
└── features/                     # Functional application modules (Views)
    ├── auth/                     # Login & User Registration forms viewports
    ├── dashboard/                # Central Analytics/Overview charts viewport
    ├── vendors/                  # Bus Vendors configuration engine dashboards
    ├── locations/                # Destination routes map address managers
    ├── schedules/                # Timetable slots and path schedulers
    └── bookings/                 # Passenger ticket allocation registries
```

---

## 🚦 Application Routing Map (`src/app/app.routes.ts`)

The routing layout establishes a split context mapping structure to isolate unauthorized users from secure zones:

* **`/auth/login` & `/auth/register`:** Loads the `AuthLayoutComponent`. Removes the sidebar/header completely. Displays independent isolated entry panels.
* **`/` (Root / Base Path Views):** Protected by `authGuard`. Loads `AdminLayoutComponent` which anchors structural framework modules (`<app-header>`, `<app-sidenav>`, `<app-footer>`) wrap-around an central inner core active `<router-outlet>`.

---

## 🔌 API Documentation Matrix

When designing UIs for data lists, tables, inputs, or detail views, map the data operations directly to these available endpoints (Base Path URL: `https://freeprojectapi.com`):

### 👤 Authentication & User Management
* `POST /api/BusBooking/login` -> Authenticates user and fetches authorization session token.
* `POST /api/BusBooking/AddNewUser` -> Registers a new user.
* `GET  /api/BusBooking/GetAllUsers` -> Fetches system operator profiles.
* `PUT  /api/BusBooking/UpdateUser` -> Updates user configuration parameters.
* `DELETE /api/BusBooking/DeleteUserByUserId?id={id}` -> Wipes user operator access.

### 🏢 Bus Vendor Management
* `GET  /api/BusBooking/GetBusVendors` -> Returns array listing registered bus operators.
* `GET  /api/BusBooking/GetBusVendorsById?id={id}` -> Profile lookup for single transit supplier.
* `POST /api/BusBooking/PostBusVendor` -> Commits newly formed vendor record profile.
* `PUT  /api/BusBooking/PutBusVendors` -> Updates vendor operational parameters.
* `DELETE /api/BusBooking/DeleteBusVendor?id={id}` -> Offboards target supplier.

### 📍 Terminal Locations & Address Management
* `GET  /api/BusBooking/GetBusLocations` -> Retrieves arrays of active booking terminals.
* `GET  /api/BusBooking/GetBusLocationById?id={id}` -> Looks up single isolated station metadata.
* `GET  /api/BusBooking/getAddressByLocationId?id={id}` -> Fetches complex map address coordinates.
* `POST /api/BusBooking/PostBusLocation` -> Creates primary structural transit city hubs.
* `POST /api/BusBooking/PostBusLocationAddress` -> Adds street detail descriptions to existing hub.
* `PUT  /api/BusBooking/PutBusLocation` -> Saves spatial geometric location changes.
* `DELETE /api/BusBooking/DeleteBusLocation?id={id}` -> Removes location points from networks.

### 📅 Schedules, Searches & Seats
* `GET  /api/BusBooking/GetBusSchedules` -> Compiles full overview listing of pending fleet travels.
* `GET  /api/BusBooking/GetBusScheduleById?id={id}` -> Isolate precise schedule dispatch charts.
* `GET  /api/BusBooking/GetAvailableRoutes` -> Analyzes city paths with operational voyages.
* `POST /api/BusBooking/searchBus` & `searchBus2` -> Dynamic query engines sorting available transport trips.
* `GET  /api/BusBooking/getBookedSeats?scheduleId={id}` -> Matrix checker assessing busy seats on selected buses.
* `POST /api/BusBooking/PostBusSchedule` -> Schedules a new route dispatch.
* `PUT  /api/BusBooking/PutBusSchedule` -> Postpones, shifts, or alters departure milestones.
* `DELETE /api/BusBooking/DeleteBusSchedule?id={id}` -> Cancels upcoming transport voyages.

### 🎟️ Bookings & Ticket Transactions
* `GET  /api/BusBooking/GetAllBusBookings` -> Admin monitor compiling all tickets sold globally.
* `GET  /api/BusBooking/GetBusBooking?id={id}` -> Pulls deep breakdown payload for specific reservation vouchers.
* `POST /api/BusBooking/PostBusBooking` -> Executes purchase sequence assigning passenger names to layouts.
* `DELETE /api/BusBooking/DeleteBusBooking?id={id}` -> Voids registration ticket orders.

---

## 🤖 Guide: Instructions for Generating Specific Screens

When prompting the Cursor Agent to build an individual feature screen, pass it instructions like this example:

> *"Using the architectural layout patterns and API specifications outlined in the project README, please design the complete **Bus Schedules dashboard UI layout** inside `src/app/features/schedules/`. Establish a dynamic tabular data visualization template mapping properties from `GetBusSchedules`, complete with pagination, search sorting filters, and an inline status indicator banner. Render using modern Angular signals for local data arrays, and ensure all input configurations are managed via standard reactive elements."*