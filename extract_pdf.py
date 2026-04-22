        pdf_reader = PyPDF2.PdfReader(file) 
        text = "" 
        for page_num in range(len(pdf_reader.pages)): 
            page = pdf_reader.pages[page_num] 
            text += page.extract_text() + "\n" 
        print(text) 
except ImportError: 
    print("PyPDF2 not available") 
except Exception as e: 
    print(f"Error: {e}") 
