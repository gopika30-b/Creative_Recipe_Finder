import express from "express";
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
const { Schema } = mongoose;
import multer from 'multer';
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.static("public"));
app.set("view engine", "ejs");
mongoose.connect("mongodb+srv://gopika30:beYourself@cluster0.ija6j8j.mongodb.net/Creative", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB successfully");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage: storage });

app.get("/home", async function (req, res) {
  const Header = await pageData.findOne({ pageTitle: "Header" });
  const HomePage = await pageData.findOne({ pageTitle: "Home Page" });
  const Footer = await pageData.findOne({ pageTitle: "Footer" });
  res.render("main", {
    pageTitle: "Home", Header, Footer,
    pageContent: `<p style="padding: 20px; border: 3px solid black; margin: 70px">${HomePage.content1}</p>`
  });

});
app.get("/user/home", async function (req, res) {
  const userID = req.query.userID;
  const user = await User.findOne({ userID: userID });
  const Header = await pageData.findOne({ pageTitle: "Header" });
  const HomePage = await pageData.findOne({ pageTitle: "Home Page" });
  const Footer = await pageData.findOne({ pageTitle: "Footer" });
  res.render("User/mainUser", {
    pageTitle: "Home", user: user, Header,
    pageContent: `<p style="padding: 20px; border: 3px solid black; margin: 70px">${HomePage.content1}</p>`,
    Footer
  });
});
app.get("/vchef/home", async function (req, res) {
  const userID = req.query.userID;
  const Header = await pageData.findOne({ pageTitle: "Header" });
  const HomePage = await pageData.findOne({ pageTitle: "Home Page" });
  const Footer = await pageData.findOne({ pageTitle: "Footer" });
  const user = await User.findOne({ userID: userID });
  res.render("Vchef/mainVchef", {
    pageTitle: "Home", user: user, Header, Footer,
    pageContent: `<p style="padding: 20px; border: 3px solid black; margin: 70px">${HomePage.content1}</p>`
  });
});
app.get("/admin/home", async function (req, res) {
  const userID = req.query.userID;
  const user = await User.findOne({ userID: userID });
  const Header = await pageData.findOne({ pageTitle: "Header" });
  const HomePage = await pageData.findOne({ pageTitle: "Home Page" });
  const Footer = await pageData.findOne({ pageTitle: "Footer" });
  res.render("Admin/mainAdmin", {
    pageTitle: "Home", user: user, Header, Footer,
    pageContent: `<p style="padding: 20px; border: 3px solid black; margin: 70px">${HomePage.content1}</p>`
  });
});

app.get("/aboutus", async function (req, res) {
  const Header = await pageData.findOne({ pageTitle: "Header" });
  const AboutPage = await pageData.findOne({ pageTitle: "About Page" });
  const Footer = await pageData.findOne({ pageTitle: "Footer" });
  res.render("main", {
    pageTitle: "About Us",
    pageContent:`<p style="padding: 20px; border: 3px solid black; margin: 70px">${AboutPage.content1}</p>`, Header, Footer
  });

});
app.get("/user/aboutus", async function (req, res) {
  const userID = req.query.userID;
  const user = await User.findOne({ userID: userID });
  const Header = await pageData.findOne({ pageTitle: "Header" });
  const AboutPage = await pageData.findOne({ pageTitle: "About Page" });
  const Footer = await pageData.findOne({ pageTitle: "Footer" });
  res.render("User/mainUser", {
    pageTitle: "About Us", user: user,
    pageContent: `<p style="padding: 20px; border: 3px solid black; margin: 70px">${AboutPage.content1}</p>`, Header, Footer
  });

});
app.get("/vchef/aboutus", async function (req, res) {
  const userID = req.query.userID;
  const user = await User.findOne({ userID: userID });
  const Header = await pageData.findOne({ pageTitle: "Header" });
  const AboutPage = await pageData.findOne({ pageTitle: "About Page" });
  const Footer = await pageData.findOne({ pageTitle: "Footer" });
  res.render("Vchef/mainVchef", {
    pageTitle: "About Us", user: user,
    pageContent:`<p style="padding: 20px; border: 3px solid black; margin: 70px">${AboutPage.content1}</p>`, Header, Footer
  });

});
app.get("/admin/aboutus", async function (req, res) {
  const userID = req.query.userID;
  const user = await User.findOne({ userID: userID });
  const Header = await pageData.findOne({ pageTitle: "Header" });
  const AboutPage = await pageData.findOne({ pageTitle: "About Page" });
  const Footer = await pageData.findOne({ pageTitle: "Footer" });
  res.render("Admin/mainAdmin", {
    pageTitle: "About Us", user: user,
    pageContent: `<p style="padding: 20px; border: 3px solid black; margin: 70px">${AboutPage.content1}</p>`, Header, Footer
  });

});

app.get("/", async function (req, res) {
  try {
    const Adminrecpies = await Recipe.find();
    const Header = await pageData.findOne({ pageTitle: "Header" });
    const Footer = await pageData.findOne({ pageTitle: "Footer" });
    res.render('recipes', { pageTitle: "Recipes", Adminrecipes: Adminrecpies, Header, Footer });
  } catch (error) {
    console.error('Error fetching events:', error);
    res.status(500).send('Internal Server Error');
  }
});
app.get("/user/recipes", async function (req, res) {
  try {
    const userID = req.query.userID;
    const user = await User.findOne({ userID: userID });
    const Header = await pageData.findOne({ pageTitle: "Header" });
    const Footer = await pageData.findOne({ pageTitle: "Footer" });
    const Adminrecpies = await Recipe.find();
    res.render('User/recipesUser', { pageTitle: "Recipes", user: user, Adminrecipes: Adminrecpies, Header, Footer });
  } catch (error) {
    console.error('Error fetching events:', error);
    res.status(500).send('Internal Server Error');
  }
});
app.get("/vchef/recipes", async function (req, res) {
  try {
    const userID = req.query.userID;
    const user = await User.findOne({ userID: userID });
    const Header = await pageData.findOne({ pageTitle: "Header" });
    const Footer = await pageData.findOne({ pageTitle: "Footer" });
    const Adminrecpies = await Recipe.find();
    res.render('Vchef/recipesVchef', { pageTitle: "Recipes", user: user, Adminrecipes: Adminrecpies, Header, Footer });
  } catch (error) {
    console.error('Error fetching events:', error);
    res.status(500).send('Internal Server Error');
  }
});
app.get("/admin/recipes", async function (req, res) {
  try {
    const userID = req.query.userID;
    const user = await User.findOne({ userID: userID });
    const Adminrecpies = await Recipe.find();
    const Header = await pageData.findOne({ pageTitle: "Header" });
    const Footer = await pageData.findOne({ pageTitle: "Footer" });
    res.render('Admin/recipesAdmin', { pageTitle: "Recipes", user: user, Adminrecipes: Adminrecpies, Header, Footer });
  } catch (error) {
    console.error('Error fetching events:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.get("/user/search", async function (req, res) {
  try {
    const userID = req.query.userID;
    const user = await User.findOne({ userID: userID });
    const Header = await pageData.findOne({ pageTitle: "Header" });
    const Footer = await pageData.findOne({ pageTitle: "Footer" });
    res.render('User/searchUser', { pageTitle: "Search Recipe", user: user, Header, Footer });
  } catch (error) {
    console.error('Error fetching events:', error);
    res.status(500).send('Internal Server Error');
  }
});
app.get("/vchef/search", async function (req, res) {
  try {
    const userID = req.query.userID;
    const user = await User.findOne({ userID: userID });
    const Header = await pageData.findOne({ pageTitle: "Header" });
    const Footer = await pageData.findOne({ pageTitle: "Footer" });
    res.render('Vchef/searchVchef', { pageTitle: "Search Recipe", user: user, Header, Footer });
  } catch (error) {
    console.error('Error fetching events:', error);
    res.status(500).send('Internal Server Error');
  }
});
app.get("/admin/search", async function (req, res) {
  try {
    const userID = req.query.userID;
    const user = await User.findOne({ userID: userID });
    const Header = await pageData.findOne({ pageTitle: "Header" });
    const Footer = await pageData.findOne({ pageTitle: "Footer" });
    res.render('Admin/searchAdmin', { pageTitle: "Search Recipe", user: user, Header, Footer });
  } catch (error) {
    console.error('Error fetching events:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/user/search/result', async (req, res) => {
  try {
    const userID = req.query.userID;
    const user = await User.findOne({ userID: userID });
    const Header = await pageData.findOne({ pageTitle: "Header" });
    const Footer = await pageData.findOne({ pageTitle: "Footer" });
    const searchText = req.query.search;
    const recipes = await Recipe.find({ recipeName: { $regex: searchText, $options: 'i' } });
    const userRecipes = await userRecipe.find({ recipeName: { $regex: searchText, $options: 'i' } });
    res.render('User/searchResultUser', { pageTitle: "Search Recipe", user: user, recipes: recipes, userRecipes: userRecipes, Header, Footer });

  } catch (error) {
    console.error('Error fetching recipes:', error);
    res.status(500).send('Internal Server Error');
  }
});
app.get('/vchef/search/result', async (req, res) => {
  try {
    const userID = req.query.userID;
    const user = await User.findOne({ userID: userID });
    const Header = await pageData.findOne({ pageTitle: "Header" });
    const Footer = await pageData.findOne({ pageTitle: "Footer" });
    const searchText = req.query.search;
    const recipes = await Recipe.find({ recipeName: { $regex: searchText, $options: 'i' } });
    const userRecipes = await userRecipe.find({ recipeNames: { $regex: searchText, $options: 'i' } });
    res.render('Vchef/searchResultVchef', { pageTitle: "Search Recipe", user: user, recipes: recipes, userRecipes: userRecipes, Header, Footer });

  } catch (error) {
    console.error('Error fetching recipes:', error);
    res.status(500).send('Internal Server Error');
  }
});
app.get('/admin/search/result', async (req, res) => {
  try {
    const userID = req.query.userID;
    const user = await User.findOne({ userID: userID });
    const Header = await pageData.findOne({ pageTitle: "Header" });
    const Footer = await pageData.findOne({ pageTitle: "Footer" });
    const searchText = req.query.search;
    const recipes = await Recipe.find({ recipeName: { $regex: searchText, $options: 'i' } });
    const userRecipes = await userRecipe.find({ recipeName: { $regex: searchText, $options: 'i' } });
    res.render('Admin/searchResultadmin', { pageTitle: "Search Recipe", user: user, recipes: recipes, userRecipes: userRecipes, Header, Footer });

  } catch (error) {
    console.error('Error fetching recipes:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/user/explore/ingredients', async (req, res) => {
  try {
    const userID = req.query.userID;
    const user = await User.findOne({ userID: userID });
    const Header = await pageData.findOne({ pageTitle: "Header" });
    const Footer = await pageData.findOne({ pageTitle: "Footer" });
    const recipes = await Recipe.find();
    let allIngredients = recipes.reduce((acc, recipe) => {
      acc.push(...recipe.ingredients.map(ingredient => ingredient.name));
      return acc;
    }, []);
    const distinctIngredients = [...new Set(allIngredients)].filter(ingredient => !['Salt', 'Oil'].includes(ingredient));
    res.render('User/searchByIng', { pageTitle: 'Explore Ingredients', user: user, distinctIngredients, Header, Footer });


  } catch (error) {
    console.error('Error fetching distinct ingredients:', error);
    res.status(500).send('Internal Server Error');
  }
});
app.get('/vchef/explore/ingredients', async (req, res) => {
  try {
    const userID = req.query.userID;
    const user = await User.findOne({ userID: userID });
    const Header = await pageData.findOne({ pageTitle: "Header" });
    const Footer = await pageData.findOne({ pageTitle: "Footer" });
    const recipes = await Recipe.find();
    let allIngredients = recipes.reduce((acc, recipe) => {
      acc.push(...recipe.ingredients.map(ingredient => ingredient.name));
      return acc;
    }, []);
    const distinctIngredients = [...new Set(allIngredients)].filter(ingredient => !['Salt', 'Oil'].includes(ingredient));
    res.render('Vchef/searchByIngVchef', { pageTitle: 'Explore Ingredients', user: user, distinctIngredients, Header, Footer });


  } catch (error) {
    console.error('Error fetching distinct ingredients:', error);
    res.status(500).send('Internal Server Error');
  }
});
app.get('/admin/explore/ingredients', async (req, res) => {
  try {
    const userID = req.query.userID;
    const user = await User.findOne({ userID: userID });
    const Header = await pageData.findOne({ pageTitle: "Header" });
    const Footer = await pageData.findOne({ pageTitle: "Footer" });
    const recipes = await Recipe.find();
    let allIngredients = recipes.reduce((acc, recipe) => {
      acc.push(...recipe.ingredients.map(ingredient => ingredient.name));
      return acc;
    }, []);
    const distinctIngredients = [...new Set(allIngredients)].filter(ingredient => !['Salt', 'Oil'].includes(ingredient));
    res.render('Admin/searchByIngAdmin', { pageTitle: 'Explore Ingredients', user: user, distinctIngredients, Header, Footer });


  } catch (error) {
    console.error('Error fetching distinct ingredients:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/user/explore/ingredients/result', async (req, res) => {
  try {
    const selectedIngredients = req.query.ingredients;
    const userID = req.query.userID;
    const user = await User.findOne({ userID: userID });
    const Header = await pageData.findOne({ pageTitle: "Header" });
    const Footer = await pageData.findOne({ pageTitle: "Footer" });
    const recipes = await Recipe.find();
    let allIngredients = recipes.reduce((acc, recipe) => {
      acc.push(...recipe.ingredients.map(ingredient => ingredient.name));
      return acc;
    }, []);
    const distinctIngredients = [...new Set(allIngredients)].filter(ingredient => !['Salt', 'Oil'].includes(ingredient));
    const recipesFound = await Recipe.find({ 'ingredients.name': { $all: selectedIngredients } });
    res.render('User/searchByIngResults', { pageTitle: 'Search Results', recipesFound, user, distinctIngredients, Header, Footer });
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});
app.get('/vchef/explore/ingredients/result', async (req, res) => {
  try {
    const selectedIngredients = req.query.ingredients;
    const userID = req.query.userID;
    const user = await User.findOne({ userID: userID });
    const Header = await pageData.findOne({ pageTitle: "Header" });
    const Footer = await pageData.findOne({ pageTitle: "Footer" });
    const recipes = await Recipe.find();
    let allIngredients = recipes.reduce((acc, recipe) => {
      acc.push(...recipe.ingredients.map(ingredient => ingredient.name));
      return acc;
    }, []);
    const distinctIngredients = [...new Set(allIngredients)].filter(ingredient => !['Salt', 'Oil'].includes(ingredient));
    const recipesFound = await Recipe.find({ 'ingredients.name': { $all: selectedIngredients } });
    res.render('Vchef/searchByIngResultsVchef', { pageTitle: 'Search Results', recipesFound, user, distinctIngredients, Header, Footer });
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});
app.get('/admin/explore/ingredients/result', async (req, res) => {
  try {
    const selectedIngredients = req.query.ingredients;
    const userID = req.query.userID;
    const user = await User.findOne({ userID: userID });
    const Header = await pageData.findOne({ pageTitle: "Header" });
    const Footer = await pageData.findOne({ pageTitle: "Footer" });
    const recipes = await Recipe.find();
    let allIngredients = recipes.reduce((acc, recipe) => {
      acc.push(...recipe.ingredients.map(ingredient => ingredient.name));
      return acc;
    }, []);
    const distinctIngredients = [...new Set(allIngredients)].filter(ingredient => !['Salt', 'Oil'].includes(ingredient));
    const recipesFound = await Recipe.find({ 'ingredients.name': { $all: selectedIngredients } });
    res.render('Admin/searchByIngResultsAdmin', { pageTitle: 'Search Results', recipesFound, user, distinctIngredients, Header, Footer });
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

app.get("/user/liked", async function (req, res) {
  try {
    const userID = req.query.userID;
    const user = await User.findOne({ userID: userID });
    const Header = await pageData.findOne({ pageTitle: "Header" });
    const Footer = await pageData.findOne({ pageTitle: "Footer" });
    const likedRecipeIds = user.liked;
    const Adminrecipes = await Recipe.find();
    const Userrecipes = await userRecipe.find();
    res.render("User/likedUser", { user: user, pageTitle: "Liked List", likedRecipeIds, Adminrecipes, Userrecipes, Header, Footer });
  } catch (error) {
    console.error('Error fetching events:', error);
    res.status(500).send('Internal Server Error');
  }
});
app.get("/vchef/liked", async function (req, res) {
  try {
    const userID = req.query.userID;
    const user = await User.findOne({ userID: userID });
    const Header = await pageData.findOne({ pageTitle: "Header" });
    const Footer = await pageData.findOne({ pageTitle: "Footer" });
    const likedRecipeIds = user.liked;
    const Adminrecipes = await Recipe.find();
    const Userrecipes = await userRecipe.find();
    res.render("Vchef/likedVchef", { user: user, pageTitle: "Liked List", likedRecipeIds, Adminrecipes, Userrecipes, Header, Footer });
  } catch (error) {
    console.error('Error fetching events:', error);
    res.status(500).send('Internal Server Error');
  }
});
app.get("/admin/liked", async function (req, res) {
  try {
    const userID = req.query.userID;
    const user = await User.findOne({ userID: userID });
    const Header = await pageData.findOne({ pageTitle: "Header" });
    const Footer = await pageData.findOne({ pageTitle: "Footer" });
    const likedRecipeIds = user.liked;
    const Adminrecipes = await Recipe.find();
    const Userrecipes = await userRecipe.find();
    res.render("Admin/likedAdmin", { user: user, pageTitle: "Liked List", likedRecipeIds, Adminrecipes, Userrecipes, Header, Footer });
  } catch (error) {
    console.error('Error fetching events:', error);
    res.status(500).send('Internal Server Error');
  }
});

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

app.get("/verification", async function (req, res) {
  var a = getRandomNumber(1, 999);
  var b = getRandomNumber(1, 999);
  var result = a + b;
  const Header = await pageData.findOne({ pageTitle: "Header" });
  const Footer = await pageData.findOne({ pageTitle: "Footer" });
  res.render("main", {
    pageTitle: "Bot Check", Header, Footer,
    pageContent: `
    <div class="check">
      <p id="d1"></p><br>
      <input type="number" id="getvalue" placeholder="Enter the sum of above two numbers"><br>
      <button onclick="addcheck()">Proceed</button>
      <br><br><br><br><br>
    </div>
    <script>
      window.onload = function() {
        document.getElementById("d1").innerHTML = ${a} + " + " + ${b};
      }

      function addcheck() {
        var sum = document.getElementById("getvalue").value;
        if (sum == ${result}) {
          window.location.href = '/feedback';
        } else {
          alert("Incorrect Captcha Value");
          location.reload();
        }
      }
    </script>
    `
  });
});
app.get("/feedback", async function (req, res) {
  const Header = await pageData.findOne({ pageTitle: "Header" });
  const Footer = await pageData.findOne({ pageTitle: "Footer" });
  res.render("main", {
    pageTitle: "Feedback", Footer, Header,
    pageContent: `
        <form class="fb">
		<label for="name">Name:</label>
		<input type="text" id="name" name="name" class="fbT" required placeholder=" Enter your name ">
		<label for="email">Email:</label>
		<input type="email" id="email" name="email" class="fbT" required placeholder=" Enter your email ">
		<label for="feedback">Feedback:</label>
		<textarea id="feedback" name="feedback" class="fbT" required></textarea>
		<button onclick="disalert()" class="fbB">Submit</button>
	</form>
    <script>
		function disalert() {
			var name = document.getElementById("name").value;
			var email = document.getElementById("email").value;
			var feedback = document.getElementById("feedback").value;
			if (name.length!=0 && email.length!=0 && feedback.length!=0 ){
                window.location.href='/recipes';
                alert("Thank you for your feedback "+name+" !");
	        }}
	</script>
        `
  });

});
app.get("/user/feedback", async function (req, res) {
  const userID = req.query.userID;
  const user = await User.findOne({ userID: userID });
  const Header = await pageData.findOne({ pageTitle: "Header" });
  const Footer = await pageData.findOne({ pageTitle: "Footer" });
  res.render("User/mainUser", {
    pageTitle: "Feedback", user: user, Header, Footer,
    pageContent: `
      <form class="fb">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" class="fbT" required placeholder=" Enter your name ">
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" class="fbT" required placeholder=" Enter your email ">
  <label for="feedback">Feedback:</label>
  <textarea id="feedback" name="feedback" class="fbT" required></textarea>
  <button onclick="disalert()" class="fbB">Submit</button>
</form>
  <script>
  function disalert() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var feedback = document.getElementById("feedback").value;
    if (name.length!=0 && email.length!=0 && feedback.length!=0 ){
              window.location.href='/recipes';
              alert("Thank you for your feedback "+name+" !");
        }}
</script>
      `
  });

});
app.get("/vchef/feedback", async function (req, res) {
  const userID = req.query.userID;
  const Header = await pageData.findOne({ pageTitle: "Header" });
  const Footer = await pageData.findOne({ pageTitle: "Footer" });
  const user = await User.findOne({ userID: userID });
  res.render("Vchef/mainVchef", {
    pageTitle: "Feedback", user: user, Header, Footer,
    pageContent: `
      <form class="fb">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" class="fbT" required placeholder=" Enter your name ">
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" class="fbT" required placeholder=" Enter your email ">
  <label for="feedback">Feedback:</label>
  <textarea id="feedback" name="feedback" class="fbT" required></textarea>
  <button onclick="disalert()" class="fbB">Submit</button>
</form>
  <script>
  function disalert() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var feedback = document.getElementById("feedback").value;
    if (name.length!=0 && email.length!=0 && feedback.length!=0 ){
              window.location.href='/recipes';
              alert("Thank you for your feedback "+name+" !");
        }}
</script>
      `
  });

});
app.get("/admin/feedback", async function (req, res) {
  const userID = req.query.userID;
  const Header = await pageData.findOne({ pageTitle: "Header" });
  const Footer = await pageData.findOne({ pageTitle: "Footer" });
  const user = await User.findOne({ userID: userID });
  res.render("Admin/mainAdmin", {
    pageTitle: "Feedback", user: user, Header, Footer,
    pageContent: `
      <form class="fb">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" class="fbT" required placeholder=" Enter your name ">
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" class="fbT" required placeholder=" Enter your email ">
  <label for="feedback">Feedback:</label>
  <textarea id="feedback" name="feedback" class="fbT" required></textarea>
  <button onclick="disalert()" class="fbB">Submit</button>
</form>
  <script>
  function disalert() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var feedback = document.getElementById("feedback").value;
    if (name.length!=0 && email.length!=0 && feedback.length!=0 ){
              window.location.href='/recipes';
              alert("Thank you for your feedback "+name+" !");
        }}
</script>
      `
  });

});

const recipeSchema = new Schema({
  rootURL: String,
  recipeName: String,
  ingredients: [{ name: String, quantity: String }],
  recipeSteps: [String],
  category: String,
  imageSrc: String,
  hashtags: [String],
}, { collection: 'recipeAdmin' });
const Recipe = mongoose.model('Recipe', recipeSchema);
const userRecipeSchema = new Schema({
  userID: String,
  rootURL: String,
  recipeName: String,
  ingredients: [{ name: String, quantity: String }],
  recipeSteps: [String],
  imageURL: String
}, { collection: 'userRecipes' });
const userRecipe = mongoose.model('userRecipe', userRecipeSchema);
const dataSchema = new Schema({
  pageTitle: String,
  content1: String,
  content2: String
}, { collection: 'pageData' });
const pageData = mongoose.model('pageData', dataSchema);
app.get("/vchef/addrecipe", async function (req, res) {
  const userID = req.query.userID;
  const user = await User.findOne({ userID: userID });
  const Header = await pageData.findOne({ pageTitle: "Header" });
  const Footer = await pageData.findOne({ pageTitle: "Footer" });
  res.render("Vchef/addRecipeVchef", {
    pageTitle: "Add Recipe", user: user, Header, Footer
  });
});
app.post('/submit-recipe', upload.single('image'), async (req, res) => {
  try {
    const { userID, recipeName, ingredientName, ingredientQuantity, recipeStep } = req.body;
    const ingredients = [];
    if (Array.isArray(ingredientName)) {
      for (let i = 0; i < ingredientName.length; i++) {
        if (ingredientName[i] && ingredientQuantity[i]) {
          ingredients.push({ name: ingredientName[i], quantity: ingredientQuantity[i] });
        }
      }
    } else {
      if (ingredientName && ingredientQuantity) {
        ingredients.push({ name: ingredientName, quantity: ingredientQuantity });
      }
    }
    const recipeSteps = Array.isArray(recipeStep) ? recipeStep : [recipeStep];
    const newRecipe = new userRecipe({
      userID: userID,
      recipeName: recipeName,
      ingredients: ingredients,
      recipeSteps: recipeSteps,
      imageURL: req.file.path
    });
    await newRecipe.save();
    res.redirect(`/user/recipes?userID=${userID}`);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error submitting recipe.');
  }
});

app.get("/user/upgradeacc", async function (req, res) {
  const userID = req.query.userID;
  const Header = await pageData.findOne({ pageTitle: "Header" });
  const Footer = await pageData.findOne({ pageTitle: "Footer" });
  const user = await User.findOne({ userID: userID });
  res.render("User/upgradeAccount", {
    pageTitle: "Upgrade Account", user: user, Header, Footer
  });
});
const upiTransactionSchema = new mongoose.Schema({
  userID: String,
  transactionID: String,
  paymentScreenshot: String
}, { collection: 'vchefUpgrade' });

const UpiTransaction = mongoose.model('UpiTransaction', upiTransactionSchema);
app.post('/user/submit-upi-transaction', upload.single('paymentScreenshot'), async (req, res) => {
  try {
    const { userID, transactionID } = req.body;
    const paymentScreenshotPath = req.file.path;
    const newTransaction = new UpiTransaction({
      userID: userID,
      transactionID: transactionID,
      paymentScreenshot: paymentScreenshotPath
    });
    await newTransaction.save();
    res.redirect(`/user/recipes?userID=${userID}`);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error submitting UPI transaction details.');
  }
});
app.get("/admin/validate", async function (req, res) {
  const userID = req.query.userID;
  const user = await User.findOne({ userID: userID });
  const Header = await pageData.findOne({ pageTitle: "Header" });
  const HomePage = await pageData.findOne({ pageTitle: "Home Page" });
  const Footer = await pageData.findOne({ pageTitle: "Footer" });
  const upiTransactions = await UpiTransaction.find();
  res.render("Admin/validateAdmin", {
    pageTitle: "Validate Users", user: user, Header, Footer, upiTransactions
  });
});
app.get("/:page", async function (req, res) {
  try {
    const page = req.params.page;
    const Header = await pageData.findOne({ pageTitle: "Header" });
    const Footer = await pageData.findOne({ pageTitle: "Footer" });
    const recipe = await Recipe.findOne({ rootURL: page }).exec();
    if (!recipe) {
      return res.status(404).json({ error: "Content not found" });
    }
    const ingredients = recipe.ingredients;
    const recipeSteps = recipe.recipeSteps;
    const pageTitle = recipe.pageTitle;
    res.render("recipeInfo", { recipe: recipe, ingredients, recipeSteps, pageTitle, rootURL: `/${page}/buylist`, Header, Footer });
  } catch (err) {
    return res.status(500).json({ error: "An error occurred" });
  }
});
app.get("/user/:page", async function (req, res) {
  try {
    const userID = req.query.userID;
    const user = await User.findOne({ userID: userID });
    const Header = await pageData.findOne({ pageTitle: "Header" });
    const Footer = await pageData.findOne({ pageTitle: "Footer" });

    const page = req.params.page;
    const recipe = await Recipe.findOne({ rootURL: page }).exec();
    if (!recipe) {
      return res.status(404).json({ error: "Content not found" });
    }
    const ingredients = recipe.ingredients;
    const recipeSteps = recipe.recipeSteps;
    const pageTitle = recipe.pageTitle;
    const isLiked = user && user.liked.includes(String(recipe._id));
    res.render("User/recipeInfoUser", { recipe: recipe, user: user, ingredients, recipeSteps, pageTitle, isLiked, Header, Footer });
  } catch (err) {
    return res.status(500).json({ error: "An error occurred" });
  }
});
app.get("/vchef/:page", async function (req, res) {
  try {
    const userID = req.query.userID;
    const user = await User.findOne({ userID: userID });
    const Header = await pageData.findOne({ pageTitle: "Header" });
    const Footer = await pageData.findOne({ pageTitle: "Footer" });

    const page = req.params.page;
    const recipe = await Recipe.findOne({ rootURL: page }).exec();
    if (!recipe) {
      return res.status(404).json({ error: "Content not found" });
    }
    const ingredients = recipe.ingredients;
    const recipeSteps = recipe.recipeSteps;
    const pageTitle = recipe.pageTitle;
    const isLiked = user && user.liked.includes(String(recipe._id));
    res.render("Vchef/recipeInfoVchef", { recipe: recipe, user: user, ingredients, recipeSteps, pageTitle, isLiked, Header, Footer });
  } catch (err) {
    return res.status(500).json({ error: "An error occurred" });
  }
});
app.get("/admin/:page", async function (req, res) {
  try {
    const userID = req.query.userID;
    const user = await User.findOne({ userID: userID });
    const Header = await pageData.findOne({ pageTitle: "Header" });
    const Footer = await pageData.findOne({ pageTitle: "Footer" });
    const page = req.params.page;
    const recipe = await Recipe.findOne({ rootURL: page }).exec();
    if (!recipe) {
      return res.status(404).json({ error: "Content not found" });
    }
    const ingredients = recipe.ingredients;
    const recipeSteps = recipe.recipeSteps;
    const pageTitle = recipe.pageTitle;
    const isLiked = user && user.liked.includes(String(recipe._id));
    res.render("Admin/recipeInfoAdmin", { recipe: recipe, user: user, ingredients, recipeSteps, pageTitle, isLiked, Header, Footer });
  } catch (err) {
    return res.status(500).json({ error: "An error occurred" });
  }
});

app.get("/user/search/:page", async function (req, res) {
  try {
    const userID = req.query.userID;
    const user = await User.findOne({ userID: userID });
    const Header = await pageData.findOne({ pageTitle: "Header" });
    const Footer = await pageData.findOne({ pageTitle: "Footer" });

    const page = req.params.page;
    const recipe = await Recipe.findOne({ rootURL: page }).exec();
    if (!recipe) {
      return res.status(404).json({ error: "Content not found" });
    }
    const ingredients = recipe.ingredients;
    const recipeSteps = recipe.recipeSteps;
    const pageTitle = recipe.pageTitle;
    const isLiked = user && user.liked.includes(String(recipe._id));
    res.render("User/recipeInfoUser", { recipe: recipe, user: user, ingredients, recipeSteps, pageTitle, isLiked, Header, Footer });
  } catch (err) {
    return res.status(500).json({ error: "An error occurred" });
  }
});
app.get("/vchef/search/:page", async function (req, res) {
  try {
    const userID = req.query.userID;
    const user = await User.findOne({ userID: userID });
    const Header = await pageData.findOne({ pageTitle: "Header" });
    const Footer = await pageData.findOne({ pageTitle: "Footer" });

    const page = req.params.page;
    const recipe = await Recipe.findOne({ rootURL: page }).exec();
    if (!recipe) {
      return res.status(404).json({ error: "Content not found" });
    }
    const ingredients = recipe.ingredients;
    const recipeSteps = recipe.recipeSteps;
    const pageTitle = recipe.pageTitle;
    const isLiked = user && user.liked.includes(String(recipe._id));
    res.render("Vchef/recipeInfoVchef", { recipe: recipe, user: user, ingredients, recipeSteps, pageTitle, isLiked,Header, Footer });
  } catch (err) {
    return res.status(500).json({ error: "An error occurred" });
  }
});
app.get("/admin/search/:page", async function (req, res) {
  try {
    const userID = req.query.userID;
    const user = await User.findOne({ userID: userID });
    const Header = await pageData.findOne({ pageTitle: "Header" });
    const Footer = await pageData.findOne({ pageTitle: "Footer" });
    const page = req.params.page;
    const recipe = await Recipe.findOne({ rootURL: page }).exec();
    if (!recipe) {
      return res.status(404).json({ error: "Content not found" });
    }
    const ingredients = recipe.ingredients;
    const recipeSteps = recipe.recipeSteps;
    const pageTitle = recipe.pageTitle;
    const isLiked = user && user.liked.includes(String(recipe._id));
    res.render("Admin/recipeInfoAdmin", { recipe: recipe, user: user, ingredients, recipeSteps, pageTitle, isLiked, Header, Footer });
  } catch (err) {
    return res.status(500).json({ error: "An error occurred" });
  }
});

const buyListSchema = new Schema({
  rootURLBL: String,
  pageTitleBL: String,
  buylist: [String],
}, { collection: 'buyListAdmin' });
const BuyList = mongoose.model('BuyList', buyListSchema);

app.get("/:page/buylist", async function (req, res) {
  try {
    const pageBuyList = req.params.page;
    const Header = await pageData.findOne({ pageTitle: "Header" });
    const Footer = await pageData.findOne({ pageTitle: "Footer" });
    const buylist = await BuyList.findOne({ rootURLBL: pageBuyList }).exec();
    if (!buylist) {
      return res.status(404).json({ error: "Content not found" });
    }
    const ingredients = buylist.buylist;
    const pageTitle = buylist.pageTitleBL;
    res.render("buylist", { ingredients, pageTitle, Header, Footer });
  } catch (err) {
    return res.status(500).json({ error: "An error occurred" });
  }
});
app.get("/user/:page/buylist", async function (req, res) {
  try {
    const userID = req.query.userID;
    const user = await User.findOne({ userID: userID });
    const Header = await pageData.findOne({ pageTitle: "Header" });
    const Footer = await pageData.findOne({ pageTitle: "Footer" });
    const pageBuyList = req.params.page;
    const buylist = await BuyList.findOne({ rootURLBL: pageBuyList }).exec();
    if (!buylist) {
      return res.status(404).json({ error: "Content not found" });
    }
    const ingredients = buylist.buylist;
    const pageTitle = buylist.pageTitleBL;
    res.render("User/buylistUser", { user: user, ingredients, pageTitle, Header,Footer });
  } catch (err) {
    return res.status(500).json({ error: "An error occurred" });
  }
});
app.get("/vchef/:page/buylist", async function (req, res) {
  try {
    const userID = req.query.userID;
    const user = await User.findOne({ userID: userID });
    const Header = await pageData.findOne({ pageTitle: "Header" });
    const Footer = await pageData.findOne({ pageTitle: "Footer" });
    const pageBuyList = req.params.page;
    const buylist = await BuyList.findOne({ rootURLBL: pageBuyList }).exec();
    if (!buylist) {
      return res.status(404).json({ error: "Content not found" });
    }
    const ingredients = buylist.buylist;
    const pageTitle = buylist.pageTitleBL;
    res.render("Vchef/buylistVchef", { user: user, ingredients, pageTitle , Header, Footer});
  } catch (err) {
    return res.status(500).json({ error: "An error occurred" });
  }
});
app.get("/admin/:page/buylist", async function (req, res) {
  try {
    const userID = req.query.userID;
    const user = await User.findOne({ userID: userID });
    const Header = await pageData.findOne({ pageTitle: "Header" });
    const Footer = await pageData.findOne({ pageTitle: "Footer" });
    const pageBuyList = req.params.page;
    const buylist = await BuyList.findOne({ rootURLBL: pageBuyList }).exec();
    if (!buylist) {
      return res.status(404).json({ error: "Content not found" });
    }
    const ingredients = buylist.buylist;
    const pageTitle = buylist.pageTitleBL;
    res.render("Admin/buylistAdmin", { user: user, ingredients, pageTitle, Header,Footer });
  } catch (err) {
    return res.status(500).json({ error: "An error occurred" });
  }
});

const userSchema = new Schema({
  fullName: String,
  userID: String,
  password: String,
  type: String,
  liked: [String],
  recipes: [String]
}, { collection: 'userInfo' });
const User = mongoose.model('User', userSchema);

app.post("/signup", function (req, res) {
  const { fullName, userID, password } = req.body;
  User.findOne({ userID: userID })
    .then((existingUser) => {
      if (existingUser) {
        return res.status(409).json({ error: "User ID already taken" });
      } else {
        const newUser = new User({
          fullName: fullName,
          userID: userID,
          password: password,
          type: "regular"
        });
        newUser.save()
          .then(() => {
            return res.json({ success: true });
          })
          .catch((err) => {
            return res.status(500).json({ error: "An error occurred" });
          });
      }
    })
    .catch((err) => {
      return res.status(500).json({ error: "An error occurred" });
    });
});
app.post('/login', async function (req, res) {
  const { userID2, psw } = req.body;
  try {
    const user = await User.findOne({ userID: userID2 });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    if (user.password !== psw) {
      return res.status(401).json({ error: 'Invalid password' });
    }
    const userType = user.type;
    const userName = user.fullName;
    const userID = user.userID;
    return res.json({ userType, userName, userID });
  } catch (err) {
    return res.status(500).json({ error: 'Internal server error' });
  }
});
app.post('/liked', async (req, res) => {
  try {
    const { userId, recipeId } = req.body;
    const stringRecipeId = String(recipeId);
    const user = await User.findOne({ userID: userId });
    const index = user.liked.indexOf(stringRecipeId);
    if (index === -1) {
      user.liked.push(stringRecipeId);
      await user.save();
      res.json({ status: 'added' });
    } else {
      user.liked.splice(index, 1);
      await user.save();
      res.json({ status: 'removed' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 'error' });
  }
});
app.post("/admin/accept", async function (req, res) {
  try {
      const userID = req.body.userID;
      await User.findOneAndUpdate({ userID: userID }, { type: "vchef" });
      await UpiTransaction.findOneAndDelete({ userID: userID });
      res.redirect(`/admin/validate?userID=${userID}`);
  } catch (error) {
      console.error("Error accepting transaction:", error);
      res.status(500).send("Internal Server Error");
  }
});
app.post("/admin/reject", async function (req, res) {
  try {
      const userID = req.body.userID;
      await UpiTransaction.findOneAndDelete({ userID: userID });
      res.redirect(`/admin/validate?userID=${userID}`);
  } catch (error) {
      console.error("Error rejecting transaction:", error);
      res.status(500).send("Internal Server Error");
  }
});
app.listen(3000, function () {
  console.log("Server running on port 3000");
}); 