module.exports = employees => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>My Team</title>
</head>
<body>
<header>
<h1>My Team</h1>
</header>
<div class = "employee-cards">
    ${employees.managers.map(manager => `
   <div class = "card">
    <div class = "name-tag">
       <h2> ${manager.name}</h2>
       <h3> </h3>
    </div>
    <div>
    <p>ID:${manager.id}</p>
    <p>Email:${manager.email}</p>
    <p>Office Number:${manager.officeNumber}</p>
    </div>
    </div>
    `)}
    

    ${employees.engineers.map(engineer => `
    <div class = "card">
    <div class = "name-tag">
        <h2>${engineer.name}</h2>
        <h3> </h3>
    </div>
    <div>
    <p>ID:${engineer.id}</p>
    <p>Email:${engineer.email}</p>
    <p>GitHub:${engineer.github}</p>
    </div>
    </div>
    `)}

    ${employees.interns.map(intern => `
    <div class = "card">
    <div class = "name-tag">
        <h2>${intern.name}</h2>
        <h3> </h3>
    </div>
    <div>
    <p>ID:${intern.id}</p>
    <p>Email:${intern.email}</p>
    <p>School:${intern.school}</p>
    </div>
    </div>
    `)}
</div>
</body>
</html>
`