<h1 align="center">Films</h1>
Films jest to aplikacja webowa, która umożliwia dodawanie oraz wyświetlanie nowododanych filmów. Pomysł stworzenia takowej strony internetowej zrodził się w mojej głowie z powodu chęci nauki i pogłębiania wiedzy z zakresu wykorzystania danych pochodzących z API. Na etapie planowania zdecydowałam wykorzystać API dostarczane przez uczelnię, na której studiuję. Zadania, które przed sobą postawiłam to stworzenie i wdrożenie całej logiki systemu oraz przedstawienie danych w formie możliwie jak najlepszej dla użytkownika końcowego.

## Opis projektu 

### Rejestracja

Po uruchomieniu apliakcji poprzez wpisanie w terminalu Visual Studio Code komendy npm start jako pierwsza ukazuję się podstrona rejestracji użytkownika. Wymagane dane do rejestracji to: nazwa użytkownika, e-mail oraz hasło. Po wciśnięciu przycisku "Sign up" następuje utowrzenie konta i przejście do ekranu home.

![rerjestracja](https://user-images.githubusercontent.com/80101842/155860467-b48766ff-6401-4d70-9467-f368a1c2a30a.png)

### Logowanie

Gdy uzytkownik posiada już konto w serwisie to loguje się poprzez uzupełnienie formularza w zakładce Login. Podaje on e-mail oraz hasło. Po wciśnięciu przycisku "Log in", zostaje przekierowany na stronę główną.

![logowanie](https://user-images.githubusercontent.com/80101842/155860465-8676e57d-5740-4f9d-99c2-ca388eeeab30.png)

### Home
Użytkownik, wchodząc na stronę internetową Films ma możliwość zobaczenia ostatnio dodanych przez uzytkowników filmów albo seriali. Niezbędne informacje do realizacji tej funkcjonalności zostały pobrane z uczelnianego API. Są to tytuł filmu/serialu oraz grafika. Po najechaniu kursorem myszy na wybrane zdjęcie pojawia się przycisk kierujący użytkownika do podstrony dedykowanej konkretnemu filmowi/serialowi. 

![home](https://user-images.githubusercontent.com/80101842/155717823-1e4d417b-a1ed-4d82-ab95-b08e17444e19.png)

### Podstrona filmu
Znajdują się tutaj wszystkie niezbędne informacje o danym filmie/serialu takie jak tutuł, opis, grafika. Przycisk "Back" umieszczony na tej postronie umożliwia użytkownikowi powrót do strony głównej.

![podstrona filmu](https://user-images.githubusercontent.com/80101842/155860321-1fac0e33-6f4b-49f4-8d68-e5765d4a21ae.png)

### Dodawanie nowego filmu/serialu

Funkcjonalność umozliwiająca dodanie nowego filmu przez użytkownika. Uzupełnia on formularz następującymi danymi: tytuł, opis, grafika. Poprzez kliknięcie przycisku "Submit", informacje wpisane przez użytkownika zostają zapisane w uczelnianym API. Po odświeżeniu strony głowej pojawia się dodany obiek.

![dodawanie filmu](https://user-images.githubusercontent.com/80101842/155860459-de18fc13-a098-4f3b-af20-b2a85d5e7a58.png)

# Proces tworzenia projektu
Projekt zrealizowany został przy wykorzystaniu podstawowych narzędzi, służących zarówno do projektowania warstwy wizualnej jak i do kodowania strony internetowej. W trakcie pracy użyłam programów **Figma** oraz **Visual Studio Code**. Do kontroli wersji oprogramowania, standardowo skorzystałam z **Github**.

**Funkcjonalności**
- Pozyskiwanie danych z zewnętrznego API
- Wysyłanie danych do API
- Zakładanie nowego konta
- Logowanie 
- Dodawanie nowych filmów
- Stworzenie warstwy wizualnej dla komputerów osobistych

**Poczynione kroki**
- Stworzenie konceptu strony
- Stworzenie szablonu strony
- Inicjalizacja projektu i repozytorium
- Stworzenie struktury strony
- Wykorzystanie języka Javascript do stworzenia funkcjonalności strony
- Obsługa zdarzeń na stronie przy użyciu języka Javascript

**Technologie**
- REST API
- JavaScript
- HTML
- CSS
- GIT
- Figma
