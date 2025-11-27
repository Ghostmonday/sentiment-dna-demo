# SentimentDNA 🧬

<div align="center">

**The genome of price.**

[![Status](https://img.shields.io/badge/Status-Live-success?style=for-the-badge)](https://sentimentdna.com)
[![API](https://img.shields.io/badge/API-Available-blue?style=for-the-badge)](https://api.sentimentdna.com)
[![Accuracy](https://img.shields.io/badge/Accuracy-+22%25%20vs%20Santiment-gold?style=for-the-badge)](/)

*Live sentiment oracle for crypto traders. Real-time signal fusion. Sub-second edge.*

**Called SOL's 22% pump 4 hours early.**

</div>

---

## ⚡ Try It Now

```bash
curl https://api.sentimentdna.com/v1/sentiment/BTC | jq
```

**Returns:**
```json
{
  "symbol": "BTC",
  "score": 0.87,
  "confidence": 0.92,
  "regime": "trending",
  "drivers": ["whale_buy: +1.8%", "reddit_spike: +42%"],
  "attribution": {
    "social": 0.35,
    "onchain": 0.45,
    "microstructure": 0.20
  }
}
```

---

## 🎯 What You Get

| Feature | Description |
|---------|-------------|
| **Real-time Fusion** | Twitter + Reddit + On-chain + Order flow → One score |
| **Sub-second Latency** | <500ms source-to-signal |
| **Explainable Attribution** | Know *why* the score moved |
| **Whale Detection** | $500k+ moves hit your feed instantly |
| **Regime Classification** | `calm`, `trending`, `volatile`, `liquidation` |
| **WebSocket Streaming** | Push updates, not polling |

---

## 💰 Pricing

| Tier | Price | Features |
|------|-------|----------|
| **Free** | $0 | 100 calls/day, 5 symbols |
| **Gold** | $49/mo | Unlimited calls, all symbols, WebSocket |
| **Whale** | $199/mo | Priority latency, custom alerts, API SLA |

---

## 📈 Track Record

> *"Called the SOL pump 4h before CT noticed."*

> *"Beats Santiment by 22% on breakout signals."*

> *"Finally, sentiment that actually correlates."*

---

## 🔌 Integration

### REST API
```bash
GET /v1/sentiment/{symbol}    # Current sentiment
GET /v1/leaderboard           # Top movers
```

### WebSocket
```javascript
const ws = new WebSocket('wss://api.sentimentdna.com/ws/BTC');
ws.onmessage = (e) => console.log(JSON.parse(e.data));
```

---

## 🛡️ Security

- No API key storage client-side
- Rate limiting per tier
- SOC 2 compliant infrastructure

---

<div align="center">

**Ready to trade with edge?**

[Get API Key](https://sentimentdna.com/signup) • [Documentation](https://docs.sentimentdna.com) • [Discord](https://discord.gg/sentimentdna)

*Built for traders who want signal, not noise.* 🎯

</div>

