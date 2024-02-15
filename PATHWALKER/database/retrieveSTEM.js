let data = [
    {"schoolName": "Globetek Science Foundation", "city": "Makati City", "schoolID": 407698},
    {"schoolName": "Lorenzo Ruiz Academy", "city": "Binondo", "schoolID": 406330},
    {"schoolName": "AMA Computer College", "city": "Caloocan City", "schoolID": 400947},
    {"schoolName": "AMA Computer Learning Center", "city": "Caloocan City", "schoolID": 400951},
    {"schoolName": "Datamex Institute of Computer Technology", "city": "Caloocan City", "schoolID": 400960},
    {"schoolName": "Martinez Memorial Colleges", "city": "Caloocan City", "schoolID": 400972},
    {"schoolName": "STI College", "city": "Caloocan City", "schoolID": 400978},
    {"schoolName": "La Consolacion College", "city": "Caloocan City", "schoolID": 406678},
    {"schoolName": "Notre Dame of Greater Manila", "city": "Caloocan City", "schoolID": 406681},
    {"schoolName": "Philippine Cultural College", "city": "Caloocan City", "schoolID": 406683},
    {"schoolName": "St. Mary's Academy", "city": "Caloocan City", "schoolID": 406685},
    {"schoolName": "Systems Plus Computer College", "city": "Caloocan City", "schoolID": 406686},
    {"schoolName": "World Citi Colleges", "city": "Caloocan City", "schoolID": 406691},
    {"schoolName": "Manila Central University", "city": "Caloocan City", "schoolID": 406696},
    {"schoolName": "St. Dominic Savio College", "city": "Caloocan City", "schoolID": 406698},
    {"schoolName": "Mystical Rose School", "city": "Caloocan City", "schoolID": 406713},
    {"schoolName": "St. Joseph College of Novaliches", "city": "Caloocan City", "schoolID": 406729},
    {"schoolName": "Guardian Angel School", "city": "Caloocan City", "schoolID": 406732},
    {"schoolName": "La Consolacion College - Novaliches", "city": "Caloocan City", "schoolID": 406734},
    {"schoolName": "Rosary Hills International School", "city": "Caloocan City", "schoolID": 406735},
    {"schoolName": "St. Benedict School of Novaliches", "city": "Caloocan City", "schoolID": 406740},
    {"schoolName": "E.M. Castro", "city": "Caloocan City", "schoolID": 483512},
    {"schoolName": "St. Mary Goretti School", "city": "Caloocan City", "schoolID": 483517},
    {"schoolName": "St. Vincent de Ferrer College", "city": "Caloocan City", "schoolID": 483521},
    {"schoolName": "Young Achievers' School", "city": "Caloocan City", "schoolID": 483526},
    {"schoolName": "Golden Link College", "city": "Caloocan City", "schoolID": 483528},
    {"schoolName": "Holy Angel School", "city": "Caloocan City", "schoolID": 483545},
    {"schoolName": "Escuela de Sophia", "city": "Caloocan City", "schoolID": 483550},
    {"schoolName": "University of the East", "city": "Caloocan City", "schoolID": 483559},
    {"schoolName": "Ridgewood School", "city": "Caloocan City", "schoolID": 483569},
    {"schoolName": "St. Vincent Institute of Technology", "city": "Caloocan City", "schoolID": 483620},
    {"schoolName": "Northern Rizal Yorklin School", "city": "Caloocan City", "schoolID": 406680},
    {"schoolName": "ABE International College of Business and Economics", "city": "Las Piñas City", "schoolID": 400981},
    {"schoolName": "AMA Computer College", "city": "Las Piñas City", "schoolID": 400986},
    {"schoolName": "Southville International School and Colleges", "city": "Las Piñas City", "schoolID": 400997},
    {"schoolName": "St. Augustine College", "city": "Las Piñas City", "schoolID": 400999},
    {"schoolName": "STI College", "city": "Las Piñas City", "schoolID": 401000},
    {"schoolName": "AMA Basic Education", "city": "Las Piñas City", "schoolID": 405614},
    {"schoolName": "Philippine Merchant Marine School", "city": "Las Piñas City", "schoolID": 407036},
    {"schoolName": "Divine Light Academy", "city": "Las Piñas City", "schoolID": 407085},
    {"schoolName": "Holy Rosary Academy", "city": "Las Piñas City", "schoolID": 407087},
    {"schoolName": "St. Joseph's Academy", "city": "Las Piñas City", "schoolID": 407103},
    {"schoolName": "University of Perpetual Help System Dalta", "city": "Las Piñas City", "schoolID": 407107},
    {"schoolName": "Westfield Science-Oriented School", "city": "Las Piñas City", "schoolID": 407109},
    {"schoolName": "Augustinian Abbey School", "city": "Las Piñas City", "schoolID": 407110},
    {"schoolName": "Bloomfield Academy", "city": "Las Piñas City", "schoolID": 407114},
    {"schoolName": "Don Carlo Cavina School", "city": "Las Piñas City", "schoolID": 407117},
    {"schoolName": "Elizabeth Seton School", "city": "Las Piñas City", "schoolID": 407119},
    {"schoolName": "Las Piñas College", "city": "Las Piñas City", "schoolID": 407124},
    {"schoolName": "Montessori De Manila", "city": "Las Piñas City", "schoolID": 407131},
    {"schoolName": "Saint Francis of Asisi College", "city": "Las Piñas City", "schoolID": 407142},
    {"schoolName": "Sto. Niño De Eucharistia Academy", "city": "Las Piñas City", "schoolID": 407146},
    {"schoolName": "GCF South Metro Christian School", "city": "Las Piñas City", "schoolID": 486534},
    {"schoolName": "ABE International Business College", "city": "Makati City", "schoolID": 401015},
    {"schoolName": "AMA Computer College", "city": "Makati City", "schoolID": 401016},
    {"schoolName": "AMA Computer Learning Center", "city": "Makati City", "schoolID": 401027},
    {"schoolName": "Asia Pacific College", "city": "Makati City", "schoolID": 401034},
    {"schoolName": "Centro Escolar University", "city": "Makati City", "schoolID": 401059},
    {"schoolName": "STI College", "city": "Makati City", "schoolID": 401074},
    {"schoolName": "Global City Innovative College", "city": "Makati City", "schoolID": 401670},
    {"schoolName": "St. Paul College", "city": "Makati City", "schoolID": 406821},
    {"schoolName": "Assumption College", "city": "Makati City", "schoolID": 406836},
    {"schoolName": "Don Bosco Technical Institute", "city": "Makati City", "schoolID": 406837},
    {"schoolName": "Colegio de Sta. Rosa", "city": "Makati City", "schoolID": 406844},
    {"schoolName": "Colegio San Agustin", "city": "Makati City", "schoolID": 406851},
    {"schoolName": "4th Watch Maranatha Christian Academy", "city": "Makati City", "schoolID": 406857},
    {"schoolName": "Makati Hope Christian School", "city": "Makati City", "schoolID": 406858},
    {"schoolName": "Bethany Baptist Academy", "city": "Makati City", "schoolID": 406864},
    {"schoolName": "Bloomfield Academy", "city": "Makati City", "schoolID": 485013},
    {"schoolName": "Reach International School", "city": "Makati City", "schoolID": 485032},
    {"schoolName": "University of Makati", "city": "Makati City", "schoolID": 600305},
    {"schoolName": "De La Salle Araneta University", "city": "Malabon City", "schoolID": 407220},
    {"schoolName": "Arellano University", "city": "Malabon City", "schoolID": 407518},
    {"schoolName": "De La Salle University", "city": "Malate", "schoolID": 401151},
    {"schoolName": "Emilio Aguinaldo College", "city": "Malate", "schoolID": 401160},
    {"schoolName": "Lyceum of the Philippines University", "city": "Malate", "schoolID": 401188},
    {"schoolName": "Mapua Institute of Technology - Intramuros Campus", "city": "Malate", "schoolID": 401193},
    {"schoolName": "Philippine College of Health Sciences", "city": "Malate", "schoolID": 401242},
    {"schoolName": "St. Paul University", "city": "Malate", "schoolID": 401293},
    {"schoolName": "STI College", "city": "Malate", "schoolID": 401303},
    {"schoolName": "Adamson University", "city": "Malate", "schoolID": 406359},
    {"schoolName": "Colegio de San Juan de Letran", "city": "Malate", "schoolID": 406360},
    {"schoolName": "Ermita Catholic School", "city": "Malate", "schoolID": 406363},
    {"schoolName": "Jesus Reigns Christian Academy", "city": "Malate", "schoolID": 406364},
    {"schoolName": "Malate Catholic School", "city": "Malate", "schoolID": 406366},
    {"schoolName": "Philippine Christian School", "city": "Malate", "schoolID": 406367},
    {"schoolName": "St. Anthony School", "city": "Malate", "schoolID": 406370},
    {"schoolName": "St. Scholastica's College", "city": "Malate", "schoolID": 406371},
    {"schoolName": "Santa Isabel College", "city": "Malate", "schoolID": 406372},
    {"schoolName": "Colegio de Sta. Rosa", "city": "Malate", "schoolID": 406466},
    {"schoolName": "Pamantasan ng Lungsod ng Maynila", "city": "Malate", "schoolID": 600201},
    {"schoolName": "Technological University of the Philippines", "city": "Malate", "schoolID": 600202},
    {"schoolName": "AMA Computer College", "city": "Mandaluyong City", "schoolID": 401091},
    {"schoolName": "Our Lady of Guadalupe Colleges", "city": "Mandaluyong City", "schoolID": 401114},
    {"schoolName": "St. Augustine School of Nursing", "city": "Mandaluyong City", "schoolID": 401132},
    {"schoolName": "STI College", "city": "Mandaluyong City", "schoolID": 401134},
    {"schoolName": "Don Bosco Technical College", "city": "Mandaluyong City", "schoolID": 406749},
    {"schoolName": "Good Shepherd Christian School", "city": "Mandaluyong City", "schoolID": 406750},
    {"schoolName": "Namei Polytechnic University", "city": "Mandaluyong City", "schoolID": 406751},
    {"schoolName": "Arellano University", "city": "Mandaluyong City", "schoolID": 406753},
    {"schoolName": "San Felipe Neri Parochial School", "city": "Mandaluyong City", "schoolID": 406754},
    {"schoolName": "Jose Rizal University", "city": "Mandaluyong City", "schoolID": 406757},
    {"schoolName": "La Salle - Green Hills", "city": "Mandaluyong City", "schoolID": 406758},
    {"schoolName": "Lourdes School of Mandaluyong", "city": "Mandaluyong City", "schoolID": 406760},
    {"schoolName": "Rizal Technological University", "city": "Mandaluyong City", "schoolID": 600110},
    {"schoolName": "Centro Escolar University", "city": "Manila City", "schoolID": 401150},
    {"schoolName": "La Consolacion College", "city": "Manila City", "schoolID": 406308},
    {"schoolName": "Don Bosco School", "city": "Manila City", "schoolID": 406351},
    {"schoolName": "College of the Holy Spirit", "city": "Manila City", "schoolID": 482043},
    {"schoolName": "Universidad de Manila", "city": "Manila City", "schoolID": 600200},
    {"schoolName": "AMA Computer Learning Center", "city": "Marikina City", "schoolID": 401327},
    {"schoolName": "Pamantasan ng Lungsod ng Marikina", "city": "Marikina City", "schoolID": 406069},
    {"schoolName": "Jesus' Flock Academy", "city": "Marikina City", "schoolID": 406766},
    {"schoolName": "Marikina Catholic School", "city": "Marikina City", "schoolID": 406768},
    {"schoolName": "Nuestra Señora De Guia Academy", "city": "Marikina City", "schoolID": 406773},
    {"schoolName": "Roosevelt College", "city": "Marikina City", "schoolID": 406779},
    {"schoolName": "Infant Jesus Academy", "city": "Marikina City", "schoolID": 406787},
    {"schoolName": "Ingenium School", "city": "Marikina City", "schoolID": 406788},
    {"schoolName": "Academy of God's Children", "city": "Marikina City", "schoolID": 406790},
    {"schoolName": "Marist School", "city": "Marikina City", "schoolID": 406789},
    {"schoolName": "Mother of Divine Providence School", "city": "Marikina City", "schoolID": 406805},
    {"schoolName": "National Christian Life College", "city": "Marikina City", "schoolID": 406807},
    {"schoolName": "Our Lady of Perpetual Succor College", "city": "Marikina City", "schoolID": 406808},
    {"schoolName": "Redeemed in Christ School", "city": "Marikina City", "schoolID": 406811},
    {"schoolName": "St. Scholastica's Academy", "city": "Marikina City", "schoolID": 407467},
    {"schoolName": "Marikina Polytechnic College", "city": "Marikina City", "schoolID": 600204},
    {"schoolName": "Westbay College", "city": "Muntinlupa City", "schoolID": 401377},
    {"schoolName": "Colegio Dela Nuestra Señora De Guadalupe", "city": "Muntinlupa City", "schoolID": 407311},
    {"schoolName": "Southernside Montessori School", "city": "Muntinlupa City", "schoolID": 407336},
    {"schoolName": "De La Salle Santiago Zobel School", "city": "Muntinlupa City", "schoolID": 407349},
    {"schoolName": "PAREF Southridge School", "city": "Muntinlupa City", "schoolID": 407359},
    {"schoolName": "San Roque Catholic School", "city": "Muntinlupa City", "schoolID": 407362},
    {"schoolName": "San Beda College Alabang", "city": "Muntinlupa City", "schoolID": 407364},
    {"schoolName": "Saint Francis of Assisi College", "city": "Muntinlupa City", "schoolID": 407366},
    {"schoolName": "Lakewood School", "city": "Muntinlupa City", "schoolID": 486545},
  
]
  
let parentDiv = document.getElementById('data');

for (let index = 0; index < data.length; index++) {
  let div = document.createElement('div');
  div.className = 'schoolcard';

  let h1 = document.createElement('h1');
  h1.className = 'schoolname';
  h1.innerHTML = data[index].schoolName;

  let addr = document.createElement('p');
  addr.className = 'schooladdr'
  addr.innerHTML = data[index].city;

  let id = document.createElement('p');
  id.className = 'schoolid'
  id.innerHTML = data[index].schoolID;

  div.appendChild(h1);
  div.appendChild(addr);
  div.appendChild(id);
  parentDiv.appendChild(div);
}