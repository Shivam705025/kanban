// src/api.js
const API_URL = "https://api.quicksell.co/v1/internal/frontend-assignment";

export async function fetchTickets() {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data.tickets;
}

export async function fetchUsers() {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data.users;
}
