import sqlite3
from flask import g
from flask import Flask, jsonify, request
import json
from flask_sqlalchemy import SQLAlchemy


app = Flask(__name__)

app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///animal.sqlite"
db = SQLAlchemy(app)


class Craft(db.Model):
    __tablename__ = "crafts"
    id = db.Column(db.Integer, primary_key=True)
    group_name = db.Column(db.String)
    group_id = db.Column(db.String)
    name = db.Column(db.String)
    raw = db.Column(db.String)


@app.route('/api/categories')
def categories():
    cate = ['工具', '家具', '颜色', '装备']
    ret = {
        "code": 200,
        "data": cate
    }
    return jsonify(ret)

@app.route('/api/category/<category>')
def crafts(category):
    page = request.args.get("page", type=int, default=1)
    per_page = request.args.get("per_page", type=int, default=20)
    count = Craft.query.filter_by(group_name=category).count()
    rv = Craft.query.filter_by(group_name=category).paginate(page, per_page, error_out=False)
    result = []
    meta = {
        "page": page,
        "per_page": per_page,
        "count": count
    }
    for row in rv.items:
        raw = json.loads(row.raw)
        raw_value = []
        for v in raw:
            value = {
                "name": v[0],
                "count": v[1]
            }
            raw_value.append(value)

        dic = {
            "id": row.id,
            "group": row.group_name,
            "group_id": row.group_id,
            "name": row.name,
            "raw": raw_value
        }
        result.append(dic)
    ret = {
        "code": 200,
        "data": result,
        "meta": meta
    }
    return jsonify(ret)

@app.route('/api/search_by_name/<name>')
def search_by_name(name):
    page = request.args.get("page", type=int, default=1)
    per_page = request.args.get("per_page", type=int, default=20)
    search = "%{}%".format(name)
    count = Craft.query.filter(Craft.name.like(search)).count()
    rv = Craft.query.filter(Craft.name.like(search)).paginate(page, per_page, error_out=False)
    result = []
    meta = {
        "page": page,
        "per_page": per_page,
        "count": count
    }
    for row in rv.items:
        raw = json.loads(row.raw)
        raw_value = []
        for v in raw:
            value = {
                "name": v[0],
                "count": v[1]
            }
            raw_value.append(value)

        dic = {
            "id": row.id,
            "group": row.group_name,
            "group_id": row.group_id,
            "name": row.name,
            "raw": raw_value
        }
        result.append(dic)
    ret = {
        "code": 200,
        "data": result,
        "meta": meta
    }
    return jsonify(ret)

@app.route('/api/search_by_craft/<craft>')
def search_by_craft(craft):
    page = request.args.get("page", type=int, default=1)
    per_page = request.args.get("per_page", type=int, default=20)
    search = "%{}%".format(craft)
    count = Craft.query.filter(Craft.raw.like(search)).count()
    rv = Craft.query.filter(Craft.raw.like(search)).paginate(page, per_page, error_out=False)
    result = []
    meta = {
        "page": page,
        "per_page": per_page,
        "count": count
    }
    for row in rv.items:
        raw = json.loads(row.raw)
        raw_value = []
        for v in raw:
            value = {
                "name": v[0],
                "count": v[1]
            }
            raw_value.append(value)

        dic = {
            "id": row.id,
            "group": row.group_name,
            "group_id": row.group_id,
            "name": row.name,
            "raw": raw_value
        }
        result.append(dic)
    ret = {
        "code": 200,
        "data": result,
        "meta": meta
    }
    return jsonify(ret)
app.run()
