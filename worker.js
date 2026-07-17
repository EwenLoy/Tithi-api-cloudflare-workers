(() => {
  var __defProp = Object.defineProperty;
  var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

  // src/index.js
  var tithiNames = [
    "1. Pratipada",
    "2. Dvitiya",
    "3. Tritiya",
    "4. Chaturthi",
    "5. Panchami",
    "6. Shashthi",
    "7. Saptami",
    "8. Ashtami",
    "9. Navami",
    "10. Dashami",
    "11. Ekadashi",
    "12. Dvadashi",
    "13. Trayodashi",
    "14. Chaturdashi",
    "15. Purnima",
    "16. Pratipada",
    "17. Dvitiya",
    "18. Tritiya",
    "19. Chaturthi",
    "20. Panchami",
    "21. Shashthi",
    "22. Saptami",
    "23. Ashtami",
    "24. Navami",
    "25. Dashami",
    "26. Ekadashi",
    "27. Dvadashi",
    "28. Trayodashi",
    "29. Chaturdashi",
    "30. Amavasya"
  ];
  var pakshaNames = ["Shukla Paksha (Waxing Moon)", "Krishna Paksha (Waning Moon)"];
  var nakshatraNames = [
    "Ashwini",
    "Bharani",
    "Krittika",
    "Rohini",
    "Mrigashira",
    "Ardra",
    "Punarvasu",
    "Pushya",
    "Ashlesha",
    "Magha",
    "Purva Phalguni",
    "Uttara Phalguni",
    "Hasta",
    "Chitra",
    "Swati",
    "Vishakha",
    "Anuradha",
    "Jyeshtha",
    "Mula",
    "Purva Ashadha",
    "Uttara Ashadha",
    "Shravana",
    "Dhanishta",
    "Shatabhisha",
    "Purva Bhadrapada",
    "Uttara Bhadrapada",
    "Revati"
  ];
  var yogaNames = [
    "Vishkambha",
    "Priti",
    "Ayushman",
    "Saubhagya",
    "Shobhana",
    "Atiganda",
    "Sukarma",
    "Dhriti",
    "Shula",
    "Ganda",
    "Vriddhi",
    "Dhruva",
    "Vyaghata",
    "Harshana",
    "Vajra",
    "Siddhi",
    "Vyatipata",
    "Variyana",
    "Parigha",
    "Shiva",
    "Siddha",
    "Sadhya",
    "Shubha",
    "Shukla",
    "Brahma",
    "Indra",
    "Vaidhriti"
  ];
  var karnaNames = [
    "Kinstughna",
    "Bava",
    "Balava",
    "Kaulava",
    "Taitila",
    "Garaja",
    "Vanija",
    "Vishti",
    "Shakuni",
    "Chatushpada",
    "Nagava"
  ];
  var masaNames = [
    "Chaitra",
    "Vaishakha",
    "Jyeshtha",
    "Ashadha",
    "Srabana",
    "Bhadrapada",
    "Ashvina",
    "Kartika",
    "Margashirsha",
    "Pausha",
    "Magha",
    "Phalguna"
  ];
  var raasiNames = [
    "Aries",
    "Taurus",
    "Gemini",
    "Cancer",
    "Leo",
    "Virgo",
    "Libra",
    "Scorpio",
    "Sagittarius",
    "Capricorn",
    "Aquarius",
    "Pisces"
  ];
  var rituNames = [
    "Vasanta",
    "Vasanta",
    // Chaitra, Vaishakha
    "Grishma",
    "Grishma",
    // Jyeshtha, Ashadha
    "Summer",
    "Summer",
    // Srabana, Bhadrapada
    "Sharad",
    "Sharad",
    // Ashvina, Kartika
    "Hemanta",
    "Hemanta",
    // Margashirsha, Pausha
    "Shishira",
    "Shishira"
    // Magha, Phalguna
  ];
  var nakshatraAttributes = [
    { name: "Ashwini", gana: "Devata", guna: "Rajas", trinity: "Brahma" },
    { name: "Bharani", gana: "Manushya", guna: "Rajas", trinity: "Vishnu" },
    { name: "Krittika", gana: "Rakshasa", guna: "Rajas", trinity: "Shiva" },
    { name: "Rohini", gana: "Manushya", guna: "Rajas", trinity: "Brahma" },
    { name: "Mrigashira", gana: "Devata", guna: "Tamas", trinity: "Vishnu" },
    { name: "Ardra", gana: "Manushya", guna: "Tamas", trinity: "Shiva" },
    { name: "Punarvasu", gana: "Devata", guna: "Rajas", trinity: "Brahma" },
    { name: "Pushya", gana: "Devata", guna: "Tamas", trinity: "Vishnu" },
    { name: "Ashlesha", gana: "Rakshasa", guna: "Sattva", trinity: "Shiva" },
    { name: "Magha", gana: "Rakshasa", guna: "Tamas", trinity: "Brahma" },
    { name: "Purva Phalguni", gana: "Manushya", guna: "Rajas", trinity: "Vishnu" },
    { name: "Uttara Phalguni", gana: "Manushya", guna: "Rajas", trinity: "Shiva" },
    { name: "Hasta", gana: "Devata", guna: "Rajas", trinity: "Brahma" },
    { name: "Chitra", gana: "Rakshasa", guna: "Tamas", trinity: "Vishnu" },
    { name: "Swati", gana: "Devata", guna: "Tamas", trinity: "Shiva" },
    { name: "Vishakha", gana: "Rakshasa", guna: "Sattva", trinity: "Brahma" },
    { name: "Anuradha", gana: "Devata", guna: "Tamas", trinity: "Vishnu" },
    { name: "Jyeshtha", gana: "Rakshasa", guna: "Sattva", trinity: "Shiva" },
    { name: "Mula", gana: "Rakshasa", guna: "Tamas", trinity: "Brahma" },
    { name: "Purva Ashadha", gana: "Manushya", guna: "Rajas", trinity: "Vishnu" },
    { name: "Uttara Ashadha", gana: "Manushya", guna: "Rajas", trinity: "Shiva" },
    { name: "Shravana", gana: "Devata", guna: "Rajas", trinity: "Brahma" },
    { name: "Dhanishta", gana: "Rakshasa", guna: "Tamas", trinity: "Vishnu" },
    { name: "Shatabhisha", gana: "Rakshasa", guna: "Tamas", trinity: "Shiva" },
    { name: "Purva Bhadrapada", gana: "Manushya", guna: "Sattva", trinity: "Brahma" },
    { name: "Uttara Bhadrapada", gana: "Manushya", guna: "Tamas", trinity: "Vishnu" },
    { name: "Revati", gana: "Devata", guna: "Sattva", trinity: "Shiva" }
  ];
  addEventListener("fetch", (event) => {
    event.respondWith(handleRequest(event.request));
  });
  async function handleRequest(request) {
    try {
      const url = new URL(request.url);
      const dateInput = url.searchParams.get("date")?.trim();
      const timeInput = url.searchParams.get("time")?.trim();
      let timezone = url.searchParams.get("timezone")?.trim();
      if (!dateInput || !timeInput || !timezone) {
        return new Response(
          JSON.stringify({ error: "Please provide date, time, and timezone." }),
          { status: 400, headers: { "Content-Type": "application/json" } }
        );
      }
      const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
      const timeRegex = /^\d{2}:\d{2}$/;
      const timezoneRegex = /^[+-]?\d{2}:\d{2}$/;
      if (!dateRegex.test(dateInput)) {
        return new Response(
          JSON.stringify({ error: "Invalid date format. Use YYYY-MM-DD.", value: dateInput }),
          { status: 400, headers: { "Content-Type": "application/json" } }
        );
      }
      if (!timeRegex.test(timeInput)) {
        return new Response(
          JSON.stringify({ error: "Invalid time format. Use HH:MM.", value: timeInput }),
          { status: 400, headers: { "Content-Type": "application/json" } }
        );
      }
      if (!timezoneRegex.test(timezone)) {
        return new Response(
          JSON.stringify({ error: "Invalid timezone format. Use +/-HH:MM.", value: timezone }),
          { status: 400, headers: { "Content-Type": "application/json" } }
        );
      }
      if (!timezone.startsWith("+") && !timezone.startsWith("-")) {
        timezone = "+" + timezone;
      }
      const [year, month, day] = dateInput.split("-").map(Number);
      const [hours, minutes] = timeInput.split(":").map(Number);
      const tzSign = timezone.startsWith("-") ? -1 : 1;
      const [tzHours, tzMinutes] = timezone.replace(/^[+-]/, "").split(":").map(Number);
      const tzOffset = (tzHours * 60 + tzMinutes) * tzSign;
      const localDate = new Date(year, month - 1, day, hours, minutes);
      if (isNaN(localDate.getTime())) {
        return new Response(
          JSON.stringify({ error: "Invalid date or time values." }),
          { status: 400, headers: { "Content-Type": "application/json" } }
        );
      }
      const utcDate = new Date(localDate.getTime() - tzOffset * 60 * 1e3);
      const formatDateTime = /* @__PURE__ */ __name((date) => {
        const year2 = date.getFullYear();
        const month2 = String(date.getMonth() + 1).padStart(2, "0");
        const day2 = String(date.getDate()).padStart(2, "0");
        const hours2 = String(date.getHours()).padStart(2, "0");
        const minutes2 = String(date.getMinutes()).padStart(2, "0");
        const seconds = String(date.getSeconds()).padStart(2, "0");
        return `${year2}/${month2}/${day2}/${hours2}:${minutes2}:${seconds}`;
      }, "formatDateTime");
      const jd = toJulianDate(utcDate);
      const sunLong = getSunLongitude(jd);
      const moonLong = getMoonLongitude(jd);
      let longDiff = moonLong - sunLong;
      if (longDiff < 0) longDiff += 360;
      const tithiIndex = Math.floor(longDiff / 12);
      const tithi = tithiNames[tithiIndex];
      const tithiName = tithi.split(". ")[1];
      const tithiNumber = parseInt(tithi.split(".")[0]);
      const paksha = tithiIndex < 15 ? pakshaNames[0] : pakshaNames[1];
      const nakshatraIndex = Math.floor(moonLong / (360 / 27));
      const nakshatra = nakshatraNames[nakshatraIndex];
      const yogaLong = (moonLong + sunLong) % 360;
      const yogaIndex = Math.floor(yogaLong / (360 / 27));
      const yoga = yogaNames[yogaIndex];
      const karnaIndex = Math.floor(longDiff / 6) % 11;
      const karna = karnaNames[karnaIndex];
      const masaIndex = Math.floor(sunLong / 30);
      const masa = masaNames[masaIndex];
      const moonMasaIndex = masaIndex;
      const moonMasa = paksha === pakshaNames[1] && tithiIndex >= 15 ? masaNames[(moonMasaIndex + 1) % 12] : masa;
      const raasiIndex = Math.floor(moonLong / 30);
      const raasi = raasiNames[raasiIndex];
      const ritu = rituNames[masaIndex];
      const nakshatraAttrs = nakshatraAttributes[nakshatraIndex];
      const gana = nakshatraAttrs.gana;
      const guna = nakshatraAttrs.guna;
      const trinity = nakshatraAttrs.trinity;
      const result = {
        tithi: {
          name: tithiName,
          number: tithiNumber
        },
        paksha,
        nakshatra,
        yoga,
        karna,
        masa,
        moonMasa,
        raasi,
        ritu,
        gana,
        guna,
        trinity,
        dateTime: formatDateTime(localDate),
        timezone: `UTC${timezone}`,
        moonLongitude: moonLong.toFixed(2),
        sunLongitude: sunLong.toFixed(2)
      };
      return new Response(JSON.stringify(result), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        }
      });
    } catch (error) {
      return new Response(
        JSON.stringify({ error: "Internal server error", details: error.message }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }
  }
  __name(handleRequest, "handleRequest");
  function toJulianDate(date) {
    const year = date.getUTCFullYear();
    const month = date.getUTCMonth() + 1;
    const day = date.getUTCDate();
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    const seconds = date.getUTCSeconds();
    let a = Math.floor((14 - month) / 12);
    let y = year + 4800 - a;
    let m = month + 12 * a - 3;
    let jd = day + Math.floor((153 * m + 2) / 5) + 365 * y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) - 32045;
    jd += (hours - 12) / 24 + minutes / 1440 + seconds / 86400;
    return jd;
  }
  __name(toJulianDate, "toJulianDate");
  function getSunLongitude(jd) {
    const T = (jd - 2451545) / 36525;
    const L0 = 280.46646 + 36000.76983 * T + 3032e-7 * T * T;
    const M = 357.52911 + 35999.05029 * T - 1537e-7 * T * T;
    const e = 0.016708634 - 42037e-9 * T;
    const C = (1.914602 - 4817e-6 * T - 14e-6 * T * T) * Math.sin(toRadians(M)) + (0.019993 - 101e-6 * T) * Math.sin(toRadians(2 * M)) + 289e-6 * Math.sin(toRadians(3 * M));
    let lambda = L0 + C;
    lambda = normalizeAngle(lambda);
    return lambda;
  }
  __name(getSunLongitude, "getSunLongitude");
  function getMoonLongitude(jd) {
    const T = (jd - 2451545) / 36525;
    const L0 = 218.3164591 + 481267.88134236 * T - 13268e-7 * T * T;
    const M = 134.9634114 + 477198.8676313 * T + 8997e-6 * T * T;
    const Ms = 357.5291092 + 35999.0502909 * T - 1536e-7 * T * T;
    const F = 93.2720993 + 483202.0175273 * T - 34029e-7 * T * T;
    const D = 297.8502042 + 445267.1115168 * T - 163e-5 * T * T;
    let lambda = L0 + 6.28875 * Math.sin(toRadians(M)) + 1.274018 * Math.sin(toRadians(2 * D - M)) + 0.658309 * Math.sin(toRadians(2 * D)) + 0.213616 * Math.sin(toRadians(2 * M)) - 0.185596 * Math.sin(toRadians(Ms)) - 0.114336 * Math.sin(toRadians(2 * F));
    lambda = normalizeAngle(lambda);
    return lambda;
  }
  __name(getMoonLongitude, "getMoonLongitude");
  function toRadians(degrees) {
    return degrees * Math.PI / 180;
  }
  __name(toRadians, "toRadians");
  function normalizeAngle(angle) {
    while (angle >= 360) angle -= 360;
    while (angle < 0) angle += 360;
    return angle;
  }
  __name(normalizeAngle, "normalizeAngle");
})();
//# sourceMappingURL=index.js.map
