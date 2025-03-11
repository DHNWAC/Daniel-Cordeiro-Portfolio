from flask import Flask, render_template
from datetime import datetime

app = Flask(__name__)

@app.context_processor
def inject_current_year():
    return {"current_year": datetime.now().year}

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/ab-testing')
def ab_testing():
    return render_template('ab_testing.html')

@app.route('/causal-inference')
def causal_inference():
    return render_template('causal_inference.html')

@app.route('/customer-segmentation')
def customer_segmentation():
    return render_template('customer_segmentation.html')

@app.route('/time-series')
def time_series():
    return render_template('time_series.html')

@app.route('/nlp-analysis')
def nlp_analysis():
    return render_template('nlp_analysis.html')

@app.route('/churn-analysis')
def churn_analysis():
    return render_template('churn_analysis.html')

if __name__ == '__main__':
    app.run(debug=True)