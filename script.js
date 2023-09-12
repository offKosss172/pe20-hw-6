        const searchButton = document.getElementById('searchButton');
        const resultDiv = document.getElementById('result');

        searchButton.addEventListener('click', async () => {
            try {
                const ipResponse = await fetch('https://api.ipify.org/?format=json');
                const ipData = await ipResponse.json();
                const clientIP = ipData.ip;

                const geoResponse = await fetch(`http://ip-api.com/json/${clientIP}`);
                const geoData = await geoResponse.json();

                
                const { continentCode, country, regionName, city, district, isp } = geoData;
                resultDiv.innerHTML = `
                    <h2>Інформація про IP адресу ${clientIP}:</h2>
                    <p>Континент: ${continentCode}</p>
                    <p>Країна: ${country}</p>
                    <p>Регіон: ${regionName}</p>
                    <p>Місто: ${city}</p>
                    <p>Район: ${district}</p>
                    <p>Оператор інтернету: ${isp}</p>
                `;
            } catch (error) {
                console.error('Помилка:', error);
                resultDiv.innerHTML = 'Не працюэ.';
            }
        });