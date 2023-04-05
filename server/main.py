from fastapi import FastAPI
import pymongo
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import json
from bson import ObjectId
app = FastAPI()
myclient = pymongo.MongoClient("mongodb+srv://procoahsan:Chalnikalshawa14@cluster0.l41efsl.mongodb.net/?retryWrites=true&w=majority")
my_db = myclient["jobposting"]
postcol = my_db["postjob"]
schedulecol = my_db["schedulejob"]
myWorkerscol = my_db["myworkers"]

# Add CORS middleware to the app
origins = [
    "http://localhost",
    "http://localhost:8000",
    "http://localhost:3000",
    "http://localhost:8080",
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)



class PostJob(BaseModel):
    job_title: str
    job_salary: str
    company_name: str

class ScheduleJob(BaseModel):
    job_title: str
    job_salary: str
    job_date: str
    job_time: str
    company_name: str

class myWorkers(BaseModel):
    name: str
    job_title: str
    job_salary: str
    location: str
    job_date: str
    company_name: str


@app.post("/postjob")
async def post_job(postjob: PostJob):
    postcol.insert_one(postjob.dict())
    return {"message": "Job Posted Successfully"}

@app.post("/schedulejob")
async def schedule_job(schedulejob: ScheduleJob):
    schedulecol.insert_one(schedulejob.dict())
    return {"message": "Job Scheduled Successfully"}

@app.get("/getpostjob")
async def get_post_job(company: str):
    data = postcol.find({"company_name": company})
    data_list = []
    for post in data:
        for key, value in post.items():
            if isinstance(value, ObjectId):
                post[key] = str(value)
        data_list.append(post)
    return data_list


@app.get("/getschedulejob")
async def get_schedule_job(company: str):
    data = schedulecol.find({"company_name":  company})
    data_list = []
    for post in data:
        for key, value in post.items():
            if isinstance(value, ObjectId):
                post[key] = str(value)
        data_list.append(post)
    return data_list

@app.post("/myworkers")
async def my_workers(myworkers: myWorkers):
    myWorkerscol.insert_one(myworkers.dict())
    return {"message": "Worker Added Successfully"}

@app.get("/getmyworkers")
async def get_my_workers(company: str):
    data = myWorkerscol.find({"company_name": company})
    data_list = []
    for post in data:
        for key, value in post.items():
            if isinstance(value, ObjectId):
                post[key] = str(value)
        data_list.append(post)
    return data_list

@app.get("/")
async def root():
    return {"message": "Hello World"}


