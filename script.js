// Sample data for parking spaces
const parkingSpaces = [
    { id: 1, name: 'Parking Space 1', occupied: false },
    { id: 2, name: 'Parking Space 2', occupied: false },
{ id: 3, name: 'Parking Space 3', occupied: false },
    { id: 4, name: 'Parking Space 4', occupied: false },
{ id: 5, name: 'Parking Space 5', occupied: false },
    { id: 6, name: 'Parking Space 6', occupied: false },
{ id: 7, name: 'Parking Space 7', occupied: false },
    { id: 8, name: 'Parking Space 8', occupied: false },
{ id: 9, name: 'Parking Space 9', occupied: false },
    { id: 10, name: 'Parking Space 10', occupied: false },
    // Add more parking spaces here
];

let currentUser = null;

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    // Perform authentication (e.g., check against a database)
    // For simplicity, let's assume authentication is successful
    currentUser = { username: username };
    showReservationForm();
}

function showReservationForm() {
    const reservationForm = document.getElementById('reservation-form');
    const selectParkingSpace = document.getElementById('parking-space');
    // Populate select options with available parking spaces
    parkingSpaces.forEach(space => {
        if (!space.occupied) {
            const option = document.createElement('option');
            option.text = space.name;
            option.value = space.id;
            selectParkingSpace.add(option);
        }
    });
    reservationForm.style.display = 'block';
}

function reserve() {
    const selectedSpaceId = document.getElementById('parking-space').value;
    const selectedDate = document.getElementById('date').value;
    // Perform reservation (e.g., update database)
    // For simplicity, let's assume reservation is successful
    const selectedSpace = parkingSpaces.find(space => space.id == selectedSpaceId);
    selectedSpace.occupied = true;
    alert(`Parking space ${selectedSpace.name} reserved for ${selectedDate}`);
}

