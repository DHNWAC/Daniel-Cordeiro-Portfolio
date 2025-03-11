# Data Science Portfolio

A comprehensive showcase of data science projects demonstrating expertise in various analysis techniques and methodologies. This portfolio website is built with Flask and provides detailed explanations of six different data analysis projects.

## Project Overview

This portfolio showcases the following data science projects:

1. **A/B Testing Analysis**: Statistical comparison of variant performance to optimize user experience and conversion rates.
2. **Causal Inference Analysis**: Advanced statistical techniques to understand cause-effect relationships in socioeconomic data.
3. **Customer Segmentation**: Identifying distinct customer groups to enable targeted marketing strategies.
4. **Time Series Analysis**: Forecasting future sales trends using time series decomposition and Prophet forecasting.
5. **NLP Analysis**: Sentiment analysis, topic modelling, and text mining of product reviews for customer insights.
6. **Churn Analysis**: Predictive modelling to identify at-risk customers and analyze factors influencing retention.

## Features

- Responsive web design using Bootstrap
- Interactive project pages with detailed explanations
- Comprehensive data visualizations
- Professional "About Me" section
- Clean and intuitive navigation

## Directory Structure

```
data-science-portfolio/
├── app.py                    # Flask application
├── templates/                # HTML templates
│   ├── base.html             # Base template with common elements
│   ├── home.html             # Home page
│   ├── about.html            # About me page
│   ├── ab_testing.html       # A/B Testing project page
│   ├── causal_inference.html # Causal Inference project page
│   ├── customer_segmentation.html # Customer Segmentation project page
│   ├── time_series.html      # Time Series Analysis project page
│   ├── nlp_analysis.html     # NLP Analysis project page
│   └── churn_analysis.html   # Churn Analysis project page
├── static/                   # Static assets
│   ├── css/                  # Custom CSS files
│   ├── js/                   # JavaScript files
│   └── images/               # Images for the website
│       ├── profile.png       # Profile photo
│       ├── ab_testing/       # A/B Testing project images
│       ├── causal_inference/ # Causal Inference project images
│       ├── customer_segmentation/ # Customer Segmentation project images
│       ├── time_series/      # Time Series Analysis project images
│       ├── nlp/              # NLP Analysis project images
│       └── churn/            # Churn Analysis project images
└── README.md                 # Project documentation
```

## Setup Instructions

### Prerequisites

- Python 3.7 or higher
- pip (Python package installer)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/data-science-portfolio.git
   cd data-science-portfolio
   ```

2. Create and activate a virtual environment (optional but recommended):
   ```bash
   python -m venv venv
   
   # On Windows
   venv\Scripts\activate
   
   # On macOS/Linux
   source venv/bin/activate
   ```

3. Install the required packages:
   ```bash
   pip install flask
   ```

4. Create the necessary directories for static files:
   ```bash
   mkdir -p static/images/{ab_testing,causal_inference,customer_segmentation,time_series,nlp,churn}
   mkdir -p static/css
   mkdir -p static/js
   ```

5. Copy your visualization images to the appropriate directories:
   - A/B Testing images to `static/images/ab_testing/`
   - Causal Inference images to `static/images/causal_inference/`
   - Customer Segmentation images to `static/images/customer_segmentation/`
   - Time Series Analysis images to `static/images/time_series/`
   - NLP Analysis images to `static/images/nlp/`
   - Churn Analysis images to `static/images/churn/`

6. Add your profile photo to `static/images/profile.png`

### Running the Application

1. Start the Flask development server:
   ```bash
   python app.py
   ```

2. Open your web browser and go to:
   ```
   http://127.0.0.1:5000/
   ```

## Deployment to GitHub Pages

Since GitHub Pages doesn't support Flask applications directly, you have two options:

### Option 1: Deploy as a static site

1. Convert your Flask app to a static site using a tool like [Frozen-Flask](https://pythonhosted.org/Frozen-Flask/):
   ```bash
   pip install Frozen-Flask
   ```

2. Create a `freeze.py` file:
   ```python
   from flask_frozen import Freezer
   from app import app

   freezer = Freezer(app)

   if __name__ == '__main__':
       freezer.freeze()
   ```

3. Run the freezer to generate static files:
   ```bash
   python freeze.py
   ```

4. The generated static site will be in the `build` directory, which you can then deploy to GitHub Pages.

### Option 2: Deploy to a service that supports Flask

Consider deploying to a service that supports Python web applications, such as:
- [Heroku](https://www.heroku.com/)
- [PythonAnywhere](https://www.pythonanywhere.com/)
- [Render](https://render.com/)
- [Vercel](https://vercel.com/)

## Customization

- Update the content in the HTML templates to reflect your own projects and experience
- Modify colors and styling in the CSS files
- Add your own project images to the appropriate directories
- Update the links in the footer to your own social media profiles

## License

This project is licensed under the MIT License - see the LICENSE file for details.
