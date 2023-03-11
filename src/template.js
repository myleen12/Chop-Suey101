const Engineer = require("../lib/Engineer");

const generateTemplate = squad => {
  
    const altManager = (manager) => {
    return `
    <div class="card employee-card">
        <div class="">
            <h2 class="card-title">${manager.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
        </div>
    <div class="card" >
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${manager.getId()}</li>
          <li class="list-group-item">Email: <a href='mailto:${manager.getEmail()}'>${manager.getEmail()}</a></li>
          <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
        </ul>
      </div> 
    </div>
    `;
  };


  const altEngineer = engineer => {
    return`
    <div class="card employee-card">
    <div class="">
        <h2 class="card-title">${engineer.getName()}</h2>
        <h3 class="card-title"><i"></i>${engineer.getRole()}</h3>
    </div>
<div class="card" >
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${engineer.getId()}</li>
      <li class="list-group-item">Email: <a href='mailto:${engineer.getEmail()}'>${engineer.getEmail()}</a></li>
      <li class="list-group-item">Github: <a href='https://github.com/${engineer.getGithub()}' target='_blank' rel='noopener noreferrer'>${engineer.getGithub()}</a></li>
    </ul>
  </div> 
</div> `;
  }

  const altIntern = intern => {
    return`
    <div class="card employee-card">
        <div class="">
            <h2 class="card-title">${intern.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${intern.getRole()}</h3>
        </div>
    <div class="card" >
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${intern.getId()}</li>
          <li class="list-group-item">Email: <a href='mailto:${intern.getEmail()}'>${intern.getEmail()}</a></li>
          <li class="list-group-item">School: ${intern.getSchool()}</li>
        </ul>
      </div> 
    </div>`;
  };


  const html = [];

  html.push(squad.filter(employee => employee.getRole() === 'manager')
  .map(manager => altManager(manager))
  );
html.push(squad.filter(employee => employee.getRole() === 'engineer')
  .map(engineer => altManager(engineer))
  .join('')
  );
  html.push(squad.filter(employee => employee.getRole() === 'Intern')
  .map(intern => altManager(intern))
  .join('')
  );
  return html.join('');


};
