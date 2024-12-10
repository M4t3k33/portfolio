// Pobierz formularz
const form = document.getElementById('opinie-form');
const opinieContainer = document.getElementById('opinie-container');

// Funkcja do wyświetlania opinii
function wyswietlOpinie(opinie) {
  opinieContainer.innerHTML = '';
  opinie.forEach(opinia => {
    const opiniaElement = document.createElement('div');
    opiniaElement.classList.add('opinia');

    const ocenaElement = document.createElement('div');
    ocenaElement.classList.add('ocena');
    ocenaElement.textContent = `Ocena: ${opinia.ocena}/10`;

    const komentarzElement = document.createElement('p');
    komentarzElement.classList.add('komentarz');
    komentarzElement.textContent = opinia.komentarz;

    const autorElement = document.createElement('div');
    autorElement.classList.add('autor');
    autorElement.textContent = opinia.imieNazwisko;

    opiniaElement.appendChild(ocenaElement);
    opiniaElement.appendChild(komentarzElement);
    opiniaElement.appendChild(autorElement);
    opinieContainer.appendChild(opiniaElement);
  });
}

// Dodaj event listener na submit formularza
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Zapobiegaj domyślnemu zachowaniu formularza

  // Pobierz dane z formularza
  const imieNazwisko = document.getElementById('imie-nazwisko').value;
  const ocena = document.getElementById('ocena').value;
  const komentarz = document.getElementById('komentarz').value;

  // Utwórz obiekt z danymi
  const opinia = {
    imieNazwisko,
    ocena,
    komentarz
  };

  // Wyślij dane do serwera (np. za pomocą fetch)
  fetch('/dodaj-opinie', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(opinia)
  })
  .then(response => response.json())
  .then(data => {
    console.log('Opinia została dodana:', data);
    // Wyczyść formularz
    form.reset();
    // Pobierz i wyświetl wszystkie opinie
    pobierzOpinie();
  })
  .catch(error => {
    console.error('Błąd podczas dodawania opinii:', error);
  });
});

// Funkcja do pobierania opinii z serwera
function pobierzOpinie() {
  fetch('/pobierz-opinie')
  .then(response => response.json())
  .then(opinie => {
    wyswietlOpinie(opinie);
  })
  .catch(error => {
    console.error('Błąd podczas pobierania opinii:', error);
  });
}

// Pobierz opinie przy wczytywaniu strony
pobierzOpinie();
