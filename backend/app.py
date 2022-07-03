"""Flask entry point"""
from src import create_app
from src import cleanup_app

app = create_app()
if __name__ == "__main__":
    app.run(host="0.0.0.0")
    cleanup_app()
