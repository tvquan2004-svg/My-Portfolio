import PyPDF2

try:
    with open(r'D:\My-Portfolio\Tran-Van-Quan-TopCV.vn-220426.210808.pdf', 'rb') as f:
        reader = PyPDF2.PdfReader(f)
        for page in reader.pages:
            text = page.extract_text()
            print(text)
except ImportError:
    print('PyPDF2 not installed')
except Exception as e:
    print(f'Error: {e}')
