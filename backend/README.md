```json
{
  "line_items": [
    {
      "quantity": 1,
      "price_data": {
        "currency": "usd",
        "unit_amount": 2800,
        "product_data": {
          "name": "Cumulus",
          "description": "dfha;wofija",
          "images": ["https://i.ibb.co/NtpJ0XQ/cumulus-olive.png"]
        }
      }
    }
  ],
  "customer_email": "kavirayani1991@gmail.com"
}
```

```bash
stripe listen --forward-to http://localhost:8080/webhook
```
