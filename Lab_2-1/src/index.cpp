/*******************************************
 * BY: Jessica Dosseh 
 * CLASS: CSCI 208 001
 * LABNAME: Lab 2-1 [Part 1-Structs]
 * DESCRIPTION: For this lab, you will create a program that represents a small car dealership’s inventory. 
 * INPUT: Data from text file list.txt
 * OUTPUT: To text file luxury or economy
*********************************************/

#include <iostream>
#include <fstream>
#include <string> 

using namespace std; 

const int filesize = 5; 

// struct vaiable declaration 
  struct Car 
  {
    int id;
    string make;
    string model;
    int year;
    int price;
  };

int main()
{

  Car carList; 

  // input output file stream 
  ifstream inFS;
  ofstream outFS;

  // 1. OPEN FILE AND PASS DATA INTO AN ARRAY
  inFS.open("list.txt");
  if(!inFS.is_open())
  {
    cout << "could not open file.";
    return 1; 
  }

  while(!inFS.eof())
  {
    // cin file values to struct key
    for (int i = 0; i < 5; i++)
    {
      inFS >> carList.id; 
      inFS >> carList.make;
      inFS >> carList.model;
      inFS >> carList.year;
      inFS >> carList.price;

      // 2. PASS DATA OUTPUT INTO LUXURY OR ECONOMIC TEXT FILES
      if (carList.price > 40000)
      {
        // append carlist.data to "luxury.txt"
        outFS.open("luxury.txt", ios_base::app);
        outFS << carList.id << " "
              << carList.make << " "
              << carList.model << " "
              << carList.year << " "
              << carList.price << endl;
        outFS.close();  
      } 
      else
      {
        // append carlist.data to "economy.txt"
        outFS.open("economy.txt", ios_base::app);
        outFS << carList.id << " "
              << carList.make << " "
              << carList.model << " "
              << carList.year << " "
              << carList.price << endl;
        outFS.close(); 
      } 
    }   
  }
  inFS.close();

  return 0; 
}