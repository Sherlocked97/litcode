const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getMultiple(page = 1){
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    'SELECT * FROM Projects', 
    [offset.toString(), config.listPerPage.toString()]
    );
    const data = helper.emptyOrRows(rows);
    const meta = {page};
    
    return {
      data,
      meta
    }
  }

  async function getProject(id){
    const rows = await db.query(
      "SELECT * FROM Projects WHERE ID = '" + id + "'", 
    );
    const data = helper.emptyOrRows(rows);
    const meta = {id};
  
    return {
      data,
      meta
    }
  }
  
function validateCreate(student) {
  let messages = [];

  console.log(student);

  if (!student) {
    messages.push('No object is provided');
  }

  if (!student.quote) {
    messages.push('Quote is empty');
  }

  if (!student.author) {
    messages.push('Quote is empty');
  }

  if (student.quote && student.quote.length > 255) {
    messages.push('Quote cannot be longer than 255 characters');
  }

  if (student.author && student.author.length > 255) {
    messages.push('Author name cannot be longer than 255 characters');
  }

  if (messages.length) {
    let error = new Error(messages.join());
    error.statusCode = 400;

    throw error;
  }
}

async function create(quote){
  validateCreate(quote);

  const result = await db.query(
    'INSERT INTO Projects (ID, Name, Description, Duration, Testcases, Score) VALUES (?, ?)', 
    [quote.quote, quote.author]
  );

  let message = 'Error in creating quote';

  if (result.affectedRows) {
    message = 'Quote created successfully';
  }

  return {message};
}

module.exports = {
  getMultiple,
  getProject,
  create
}
