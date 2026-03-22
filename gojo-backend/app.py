from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

RATES = {
    "LEK": {"LEK": 1.0,        "CAD": 0.01476, "USD": 0.01085, "JPY": 1.6382,  "GBP": 0.00856, "AUD": 0.01677, "CHF": 0.00978 ,"EUR": 0.00995},
    "CAD": {"LEK": 67.75,      "CAD": 1.0,     "USD": 0.7349,  "JPY": 111.04,  "GBP": 0.5804,  "AUD": 1.1366,  "CHF": 0.6629, "EUR": 0.6763},
    "USD": {"LEK": 92.17,      "CAD": 1.3608,  "USD": 1.0,     "JPY": 151.07,  "GBP": 0.7898,  "AUD": 1.5468,  "CHF": 0.9020, "EUR": 0.9205},
    "JPY": {"LEK": 0.6104,     "CAD": 0.009005,"USD": 0.006619,"JPY": 1.0,     "GBP": 0.005229,"AUD": 0.01024,  "CHF": 0.005971, "EUR": 0.006089},
    "GBP": {"LEK": 116.79,     "CAD": 1.7228,  "USD": 1.2662,  "JPY": 191.31,  "GBP": 1.0,     "AUD": 1.9585,  "CHF": 1.1421, "EUR": 1.1716},
    "AUD": {"LEK": 59.63,      "CAD": 0.8799,  "USD": 0.6465,  "JPY": 97.68,   "GBP": 0.5106,  "AUD": 1.0,     "CHF": 0.5831, "EUR": 0.5952},
    "CHF": {"LEK": 102.26,     "CAD": 1.5086,  "USD": 1.1086,  "JPY": 167.55,  "GBP": 0.8755,  "AUD": 1.7149,  "CHF": 1.0,"EUR": 1.0415   },
    "EUR": {"LEK": 100.45, "CAD": 1.4785, "USD": 1.0864, "JPY": 164.23, "GBP": 0.8561, "AUD": 1.6801, "CHF": 0.9601, "EUR": 1.0}

}

CURRENCIES = list(RATES.keys())


# ---------- Routes ----------

@app.route("/convert")
def convert():
    """
    GET /convert?from=LEK&to=USD&amount=1000

    Returns JSON:
      { "from": "LEK", "to": "USD", "amount": 1000.0, "rate": 0.01085, "result": 10.85 }
    """
    from_c = request.args.get("from", "").upper()
    to_c   = request.args.get("to",   "").upper()

    try:
        amount = float(request.args.get("amount", 1))
    except ValueError:
        return jsonify({"error": "Invalid amount"}), 400

    if not from_c or not to_c:
        return jsonify({"error": "Missing 'from' or 'to' query parameter"}), 400

    if from_c not in RATES:
        return jsonify({"error": f"Unsupported currency: {from_c}. Supported: {CURRENCIES}"}), 400

    if to_c not in RATES[from_c]:
        return jsonify({"error": f"Unsupported currency: {to_c}. Supported: {CURRENCIES}"}), 400

    rate = RATES[from_c][to_c]
    return jsonify({
        "from":   from_c,
        "to":     to_c,
        "amount": amount,
        "rate":   rate,
        "result": round(amount * rate, 4),
    })


@app.route("/currencies")
def currencies():
    """GET /currencies — returns the list of supported currency codes."""
    return jsonify(CURRENCIES)


if __name__ == "__main__":
    app.run(debug=True)