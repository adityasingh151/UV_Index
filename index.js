import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

// Set up static files
app.use(express.static('public'));

// Set up EJS
app.set('view engine', 'ejs');

// Routes
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/sunscreen', async (req, res) => {
    const { lat, lon } = req.query;

    try {
        // Make a request to Open UV API
        const response = await axios.get(`https://api.openuv.io/api/v1/uv?lat=${lat}&lng=${lon}`, {
            headers: {
                'x-access-token': 'openuv-2w7cytrlt3z5k3g-io'
            }
        });

        const uvIndex = response.data.result.uv;
        let needSunscreen = false;

        // Determine if sunscreen is needed
        if (uvIndex > 3) {
            needSunscreen = true;
        }

        res.json({ needSunscreen });
    } catch (error) {
        console.error('Error fetching UV data:', error);
        res.status(500).json({ error: 'Error fetching UV data' });
    }
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
