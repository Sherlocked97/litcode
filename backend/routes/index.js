const express = require('express');
const router = express.Router();

// const exec = require('child_process').execSync;
// const express = require('express');
// const fs = require('fs');
// const path = require('path');

// const CODE_FOLDER = "code";

// function testCode(req, res) {
//   // let code = req.body["code"];
//   let code = "#include <unistd.h> void	putchar(char c){  write(1, &c, 1);}int	main(void) { putchar('x');return (0); }
//   "

//   try {
//     fs.writeFileSync(path.join(__dirname, CODE_FOLDER, "input_code.py"), code);
//     const proc = exec("python3 " + path.join(CODE_FOLDER, "tests.py"));
//     const results = proc.toString();

//     return res.send(results);
//   } catch (error) {
//     console.log("An error occurred");
//     console.log(error);

//     return res.send("An error occurred.");
//   }
// }

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json(testCode());
});

module.exports = router;
