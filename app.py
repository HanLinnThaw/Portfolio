from flask import Flask, render_template, request, send_from_directory
import os

app = Flask(__name__)
def base():
    return render_template('base.html')

@app.route('/')
@app.route('/home')
def home():
    
    return render_template('home.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/download/<filename>')
def download_cv(filename):
    directory = 'static'
    file_path = os.path.join(directory, filename)
    print(file_path)
    file_path ='\\'+ file_path
    return send_from_directory(directory, filename, as_attachment=True)

@app.route('/contact', methods=['GET', 'POST'])
def contact():
    if request.method == 'POST':
        name = request.form['name']
        email = request.form['email']
        message = request.form['message']
        # Here you could add code to handle the form submission (e.g., save to database)
        print(f"Received message from {name} ({email}): {message}")
        return render_template('contact.html', success=True)
    return render_template('contact.html')

if __name__ == "__main__":
    app.run(debug=True, port=5003)