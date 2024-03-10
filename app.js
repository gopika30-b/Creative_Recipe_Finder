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

app.get("/home", function (req, res) {
  res.render("main", {
    pageTitle: "Home",
    pageContent: `
        <div><span><p style="padding: 20px; border: 3px solid black;margin: 70px">A recipe is a set of instructions that describes how to prepare or make a dish. If life could only be as simple as following a recipe, we'd all be much happier. However, unlike food based recipes, life doesn't provide you with standardized ingredients as each lives their unique life. It means we must cook with what we have and see what we can come up with it. However, just like cooking ...life has a lot of similarities. For instance, while some people like to follow the recipe to the core, others like to experiment with the ingredients creating their unique take on something that might have been passed down from generation to generation.</p></span></div>
      `
  });

});
app.get("/user/home", async function (req, res) {
  const userID = req.query.userID;
  const user = await User.findOne({ userID: userID });
  res.render("mainUser", {
    pageTitle: "Home", user: user,
    pageContent: `
      <div><span><p style="padding: 20px; border: 3px solid black;margin: 70px">A recipe is a set of instructions that describes how to prepare or make a dish. If life could only be as simple as following a recipe, we'd all be much happier. However, unlike food based recipes, life doesn't provide you with standardized ingredients as each lives their unique life. It means we must cook with what we have and see what we can come up with it. However, just like cooking ...life has a lot of similarities. For instance, while some people like to follow the recipe to the core, others like to experiment with the ingredients creating their unique take on something that might have been passed down from generation to generation.</p></span></div>
    `
  });
});
app.get("/vchef/home", async function (req, res) {
  const userID = req.query.userID;
  const user = await User.findOne({ userID: userID });
  res.render("Vchef/mainVchef", {
    pageTitle: "Home", user: user,
    pageContent: `
      <div><span><p style="padding: 20px; border: 3px solid black;margin: 70px">A recipe is a set of instructions that describes how to prepare or make a dish. If life could only be as simple as following a recipe, we'd all be much happier. However, unlike food based recipes, life doesn't provide you with standardized ingredients as each lives their unique life. It means we must cook with what we have and see what we can come up with it. However, just like cooking ...life has a lot of similarities. For instance, while some people like to follow the recipe to the core, others like to experiment with the ingredients creating their unique take on something that might have been passed down from generation to generation.</p></span></div>
    `
  });
});

app.get("/aboutus", function (req, res) {
  res.render("main", {
    pageTitle: "About Us",
    pageContent: `
        <div> <span> <p style="padding: 20px; border: 3px solid black; margin: 70px">Hi I'm Gopika! the cook and writter behind this webpage. I've grown up in the kitchen along side my mum and grandmothers and conversations in my family are always about the next meal. I've picked up their love for food along the way, and with this webpage, I share my food story with you. Simply Recipes is here to help you cook delicious meals with less stress and more joy. We offer recipes and cooking advice for home cooks. Helping create “<b>KITCHEN WINS</b>” is what I am all about. Everyone is welcome at the Simply Recipes table: people of all races, religions, genders, sexual orientations, ages, backgrounds, and abilities. We strive to be a resource for every home cook, and I consciously work to make this inclusion felt in every part of the site. We're not perfect, but we hope to get more right than we get wrong. As we all know, cooking is not just about preparing meals; it's also a way to express ourselves, to show our creativity, and to connect with our emotions. Cooking can be a therapeutic activity that can help us deal with stress, anxiety, and other emotions that we may be experiencing. When we cook, we can focus on the task at hand and forget about our worries, even if it's just for a little while. The next time you step into the kitchen, take a moment to appreciate the emotional aspect of cooking and enjoy the process of creating something delicious and meaningful.</p></span></div><br><br>
        `
  });

});
app.get("/user/aboutus", async function (req, res) {
  const userID = req.query.userID;
  const user = await User.findOne({ userID: userID });
  res.render("mainUser", {
    pageTitle: "About Us", user: user,
    pageContent: `
      <div> <span> <p style="padding: 20px; border: 3px solid black; margin: 70px">Hi I'm Gopika! the cook and writter behind this webpage. I've grown up in the kitchen along side my mum and grandmothers and conversations in my family are always about the next meal. I've picked up their love for food along the way, and with this webpage, I share my food story with you. Simply Recipes is here to help you cook delicious meals with less stress and more joy. We offer recipes and cooking advice for home cooks. Helping create “<b>KITCHEN WINS</b>” is what I am all about. Everyone is welcome at the Simply Recipes table: people of all races, religions, genders, sexual orientations, ages, backgrounds, and abilities. We strive to be a resource for every home cook, and I consciously work to make this inclusion felt in every part of the site. We're not perfect, but we hope to get more right than we get wrong. As we all know, cooking is not just about preparing meals; it's also a way to express ourselves, to show our creativity, and to connect with our emotions. Cooking can be a therapeutic activity that can help us deal with stress, anxiety, and other emotions that we may be experiencing. When we cook, we can focus on the task at hand and forget about our worries, even if it's just for a little while. The next time you step into the kitchen, take a moment to appreciate the emotional aspect of cooking and enjoy the process of creating something delicious and meaningful.</p></span></div><br><br>
      `
  });

});
app.get("/vchef/aboutus", async function (req, res) {
  const userID = req.query.userID;
  const user = await User.findOne({ userID: userID });
  res.render("Vchef/mainVchef", {
    pageTitle: "About Us", user: user,
    pageContent: `
      <div> <span> <p style="padding: 20px; border: 3px solid black; margin: 70px">Hi I'm Gopika! the cook and writter behind this webpage. I've grown up in the kitchen along side my mum and grandmothers and conversations in my family are always about the next meal. I've picked up their love for food along the way, and with this webpage, I share my food story with you. Simply Recipes is here to help you cook delicious meals with less stress and more joy. We offer recipes and cooking advice for home cooks. Helping create “<b>KITCHEN WINS</b>” is what I am all about. Everyone is welcome at the Simply Recipes table: people of all races, religions, genders, sexual orientations, ages, backgrounds, and abilities. We strive to be a resource for every home cook, and I consciously work to make this inclusion felt in every part of the site. We're not perfect, but we hope to get more right than we get wrong. As we all know, cooking is not just about preparing meals; it's also a way to express ourselves, to show our creativity, and to connect with our emotions. Cooking can be a therapeutic activity that can help us deal with stress, anxiety, and other emotions that we may be experiencing. When we cook, we can focus on the task at hand and forget about our worries, even if it's just for a little while. The next time you step into the kitchen, take a moment to appreciate the emotional aspect of cooking and enjoy the process of creating something delicious and meaningful.</p></span></div><br><br>
      `
  });

});

app.get("/", async function (req, res) {
  try {
    const Adminrecpies = await Recipe.find();
    res.render('recipes', { pageTitle: "Recipes", Adminrecipes: Adminrecpies });
  } catch (error) {
    console.error('Error fetching events:', error);
    res.status(500).send('Internal Server Error');
  }
});
app.get("/user/recipes", async function (req, res) {
  try {
    const userID = req.query.userID;
    const user = await User.findOne({ userID: userID });
    const Adminrecpies = await Recipe.find();
    res.render('recipesUser', { pageTitle: "Recipes", user: user, Adminrecipes: Adminrecpies });
  } catch (error) {
    console.error('Error fetching events:', error);
    res.status(500).send('Internal Server Error');
  }
});
app.get("/vchef/recipes", async function (req, res) {
  try {
    const userID = req.query.userID;
    const user = await User.findOne({ userID: userID });
    const Adminrecpies = await Recipe.find();
    res.render('Vchef/recipesVchef', { pageTitle: "Recipes", user: user, Adminrecipes: Adminrecpies });
  } catch (error) {
    console.error('Error fetching events:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.get("/user/search", async function (req, res) {
  try {
    const userID = req.query.userID;
    const user = await User.findOne({ userID: userID });
    res.render('searchUser', { pageTitle: "Search Recipe", user: user });
  } catch (error) {
    console.error('Error fetching events:', error);
    res.status(500).send('Internal Server Error');
  }
});
app.get("/vchef/search", async function (req, res) {
  try {
    const userID = req.query.userID;
    const user = await User.findOne({ userID: userID });
    res.render('Vchef/searchVchef', { pageTitle: "Search Recipe", user: user });
  } catch (error) {
    console.error('Error fetching events:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/user/search/result', async (req, res) => {
  try {
    const userID = req.query.userID;
    const user = await User.findOne({ userID: userID });
    const searchText = req.query.search;
    const recipes = await Recipe.find({ pageTitle: { $regex: searchText, $options: 'i' } });
    const userRecipes = await userRecipe.find({ pageTitle: { $regex: searchText, $options: 'i' } });
    res.render('searchResultUser', { pageTitle: "Search Recipe", user: user, recipes: recipes, userRecipes: userRecipes });

  } catch (error) {
    console.error('Error fetching recipes:', error);
    res.status(500).send('Internal Server Error');
  }
});
app.get('/vchef/search/result', async (req, res) => {
  try {
    const userID = req.query.userID;
    const user = await User.findOne({ userID: userID });
    const searchText = req.query.search;
    const recipes = await Recipe.find({ pageTitle: { $regex: searchText, $options: 'i' } });
    const userRecipes = await userRecipe.find({ pageTitle: { $regex: searchText, $options: 'i' } });
    res.render('Vchef/searchResultVchef', { pageTitle: "Search Recipe", user: user, recipes: recipes, userRecipes: userRecipes });

  } catch (error) {
    console.error('Error fetching recipes:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/user/explore/ingredients', async (req, res) => {
  try {
    const userID = req.query.userID;
    const user = await User.findOne({ userID: userID });
    const recipes = await Recipe.find();
    let allIngredients = recipes.reduce((acc, recipe) => {
      acc.push(...recipe.ingredients.map(ingredient => ingredient.name));
      return acc;
    }, []);
    const distinctIngredients = [...new Set(allIngredients)].filter(ingredient => !['Salt', 'Oil'].includes(ingredient));
    res.render('searchByIng', { pageTitle: 'Explore Ingredients', user: user, distinctIngredients });


  } catch (error) {
    console.error('Error fetching distinct ingredients:', error);
    res.status(500).send('Internal Server Error');
  }
});
app.get('/vchef/explore/ingredients', async (req, res) => {
  try {
    const userID = req.query.userID;
    const user = await User.findOne({ userID: userID });
    const recipes = await Recipe.find();
    let allIngredients = recipes.reduce((acc, recipe) => {
      acc.push(...recipe.ingredients.map(ingredient => ingredient.name));
      return acc;
    }, []);
    const distinctIngredients = [...new Set(allIngredients)].filter(ingredient => !['Salt', 'Oil'].includes(ingredient));
    res.render('Vchef/searchByIngVchef', { pageTitle: 'Explore Ingredients', user: user, distinctIngredients });


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
    const recipes = await Recipe.find();
    let allIngredients = recipes.reduce((acc, recipe) => {
      acc.push(...recipe.ingredients.map(ingredient => ingredient.name));
      return acc;
    }, []);
    const distinctIngredients = [...new Set(allIngredients)].filter(ingredient => !['Salt', 'Oil'].includes(ingredient));
    const recipesFound = await Recipe.find({ 'ingredients.name': { $all: selectedIngredients } });
    res.render('searchByIngResults', { pageTitle: 'Search Results', recipesFound, user, distinctIngredients });
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
    const recipes = await Recipe.find();
    let allIngredients = recipes.reduce((acc, recipe) => {
      acc.push(...recipe.ingredients.map(ingredient => ingredient.name));
      return acc;
    }, []);
    const distinctIngredients = [...new Set(allIngredients)].filter(ingredient => !['Salt', 'Oil'].includes(ingredient));
    const recipesFound = await Recipe.find({ 'ingredients.name': { $all: selectedIngredients } });
    res.render('Vchef/searchByIngResultsVchef', { pageTitle: 'Search Results', recipesFound, user, distinctIngredients });
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

app.get("/user/liked", async function (req, res) {
  try {
    const userID = req.query.userID;
    const user = await User.findOne({ userID: userID });
    const likedRecipeIds = user.liked;
    const Adminrecipes = await Recipe.find();
    const Userrecipes = await userRecipe.find();
    res.render("likedUser", { user: user, pageTitle: "Liked List", likedRecipeIds, Adminrecipes, Userrecipes });
  } catch (error) {
    console.error('Error fetching events:', error);
    res.status(500).send('Internal Server Error');
  }
});
app.get("/vchef/liked", async function (req, res) {
  try {
    const userID = req.query.userID;
    const user = await User.findOne({ userID: userID });
    const likedRecipeIds = user.liked;
    const Adminrecipes = await Recipe.find();
    const Userrecipes = await userRecipe.find();
    res.render("Vchef/likedVchef", { user: user, pageTitle: "Liked List", likedRecipeIds, Adminrecipes, Userrecipes });
  } catch (error) {
    console.error('Error fetching events:', error);
    res.status(500).send('Internal Server Error');
  }
});

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

app.get("/verification", function (req, res) {
  var a = getRandomNumber(1, 999);
  var b = getRandomNumber(1, 999);
  var result = a + b;

  res.render("main", {
    pageTitle: "Bot Check",
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
app.get("/feedback", function (req, res) {
  res.render("main", {
    pageTitle: "Feedback",
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
  res.render("mainUser", {
    pageTitle: "Feedback", user: user,
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
  const user = await User.findOne({ userID: userID });
  res.render("Vchef/mainVchef", {
    pageTitle: "Feedback", user: user,
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

app.get("/vchef/addrecipe", async function (req, res) {
  const userID = req.query.userID;
  const user = await User.findOne({ userID: userID });
  res.render("Vchef/addRecipeVchef", {
    pageTitle: "Add Recipe", user: user
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
      // If only one ingredient is provided
      if (ingredientName && ingredientQuantity) {
        ingredients.push({ name: ingredientName, quantity: ingredientQuantity });
      }
    }

    // Convert recipeStep to an array
    const recipeSteps = Array.isArray(recipeStep) ? recipeStep : [recipeStep];

    // Save the recipe data to the database
    const newRecipe = new userRecipe({
      userID: userID,
      recipeName: recipeName,
      ingredients: ingredients,
      recipeSteps: recipeSteps,
      // Save the image path to imageURL
      imageURL: req.file.path
    });
    await newRecipe.save();

    res.send('Recipe submitted successfully.');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error submitting recipe.');
  }
});

app.get("/:page", async function (req, res) {
  try {
    const page = req.params.page;
    const recipe = await Recipe.findOne({ rootURL: page }).exec();
    if (!recipe) {
      return res.status(404).json({ error: "Content not found" });
    }
    const ingredients = recipe.ingredients;
    const recipeSteps = recipe.recipeSteps;
    const pageTitle = recipe.pageTitle;
    res.render("recipeInfo", { recipe: recipe, ingredients, recipeSteps, pageTitle, rootURL: `/${page}/buylist` });
  } catch (err) {
    return res.status(500).json({ error: "An error occurred" });
  }
});
app.get("/user/:page", async function (req, res) {
  try {
    const userID = req.query.userID;
    const user = await User.findOne({ userID: userID });

    const page = req.params.page;
    const recipe = await Recipe.findOne({ rootURL: page }).exec();
    if (!recipe) {
      return res.status(404).json({ error: "Content not found" });
    }
    const ingredients = recipe.ingredients;
    const recipeSteps = recipe.recipeSteps;
    const pageTitle = recipe.pageTitle;
    const isLiked = user && user.liked.includes(String(recipe._id));
    res.render("recipeInfoUser", { recipe: recipe, user: user, ingredients, recipeSteps, pageTitle, isLiked });
  } catch (err) {
    return res.status(500).json({ error: "An error occurred" });
  }
});
app.get("/vchef/:page", async function (req, res) {
  try {
    const userID = req.query.userID;
    const user = await User.findOne({ userID: userID });

    const page = req.params.page;
    const recipe = await Recipe.findOne({ rootURL: page }).exec();
    if (!recipe) {
      return res.status(404).json({ error: "Content not found" });
    }
    const ingredients = recipe.ingredients;
    const recipeSteps = recipe.recipeSteps;
    const pageTitle = recipe.pageTitle;
    const isLiked = user && user.liked.includes(String(recipe._id));
    res.render("Vchef/recipeInfoVchef", { recipe: recipe, user: user, ingredients, recipeSteps, pageTitle, isLiked });
  } catch (err) {
    return res.status(500).json({ error: "An error occurred" });
  }
});

app.get("/user/search/:page", async function (req, res) {
  try {
    const userID = req.query.userID;
    const user = await User.findOne({ userID: userID });

    const page = req.params.page;
    const recipe = await Recipe.findOne({ rootURL: page }).exec();
    if (!recipe) {
      return res.status(404).json({ error: "Content not found" });
    }
    const ingredients = recipe.ingredients;
    const recipeSteps = recipe.recipeSteps;
    const pageTitle = recipe.pageTitle;
    const isLiked = user && user.liked.includes(String(recipe._id));
    res.render("recipeInfoUser", { recipe: recipe, user: user, ingredients, recipeSteps, pageTitle, isLiked });
  } catch (err) {
    return res.status(500).json({ error: "An error occurred" });
  }
});
app.get("/vchef/search/:page", async function (req, res) {
  try {
    const userID = req.query.userID;
    const user = await User.findOne({ userID: userID });

    const page = req.params.page;
    const recipe = await Recipe.findOne({ rootURL: page }).exec();
    if (!recipe) {
      return res.status(404).json({ error: "Content not found" });
    }
    const ingredients = recipe.ingredients;
    const recipeSteps = recipe.recipeSteps;
    const pageTitle = recipe.pageTitle;
    const isLiked = user && user.liked.includes(String(recipe._id));
    res.render("Vchef/recipeInfoVchef", { recipe: recipe, user: user, ingredients, recipeSteps, pageTitle, isLiked });
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
    const buylist = await BuyList.findOne({ rootURLBL: pageBuyList }).exec();
    if (!buylist) {
      return res.status(404).json({ error: "Content not found" });
    }
    const ingredients = buylist.buylist;
    const pageTitle = buylist.pageTitleBL;
    res.render("buylist", { ingredients, pageTitle });
  } catch (err) {
    return res.status(500).json({ error: "An error occurred" });
  }
});
app.get("/user/:page/buylist", async function (req, res) {
  try {
    const userID = req.query.userID;
    const user = await User.findOne({ userID: userID });
    const pageBuyList = req.params.page;
    const buylist = await BuyList.findOne({ rootURLBL: pageBuyList }).exec();
    if (!buylist) {
      return res.status(404).json({ error: "Content not found" });
    }
    const ingredients = buylist.buylist;
    const pageTitle = buylist.pageTitleBL;
    res.render("buylistUser", { user: user, ingredients, pageTitle });
  } catch (err) {
    return res.status(500).json({ error: "An error occurred" });
  }
});
app.get("/vchef/:page/buylist", async function (req, res) {
  try {
    const userID = req.query.userID;
    const user = await User.findOne({ userID: userID });
    const pageBuyList = req.params.page;
    const buylist = await BuyList.findOne({ rootURLBL: pageBuyList }).exec();
    if (!buylist) {
      return res.status(404).json({ error: "Content not found" });
    }
    const ingredients = buylist.buylist;
    const pageTitle = buylist.pageTitleBL;
    res.render("Vchef/buylistVchef", { user: user, ingredients, pageTitle });
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

app.listen(3000, function () {
  console.log("Server running on port 3000");
}); 