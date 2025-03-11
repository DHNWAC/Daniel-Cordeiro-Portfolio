from flask_frozen import Freezer
from app import app

# Configure Freezer
freezer = Freezer(app)

# Define URL generators if needed
@freezer.register_generator
def url_generator():
    # Generate URLs for all the pages
    yield '/'
    yield '/about'
    yield '/ab-testing'
    yield '/causal-inference'
    yield '/customer-segmentation'
    yield '/time-series'
    yield '/nlp-analysis'
    yield '/churn-analysis'

if __name__ == '__main__':
    # Set the app's configuration for freezing
    app.config['FREEZER_RELATIVE_URLS'] = True
    app.config['FREEZER_DESTINATION'] = 'build'
    app.config['FREEZER_REMOVE_EXTRA_FILES'] = False  # Set to True to remove old files

    # Run the freezer
    freezer.freeze()
    
    print("Static site generated in the 'build' directory!")
    print("You can now deploy the contents of the 'build' directory to GitHub Pages.")