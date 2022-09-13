#include <bits/stdc++.h>
using namespace std;

const int N = 1e3+10;
int graph[N][N];

int main(){
    int n, m;
    cin>>n>>m; // n is number of nodes and m is number of edges
    int v1, v2;

    for(int i=0; i<m; i++){
        cin>>v1>>v2;
        graph[v1][v2] = 1; // 1 is for non weighted graphs
        graph[v2][v1] = 1;
    }
    
    //display
    for(int i=0; i<m; i++){
        for(int j=0; j<m; j++){
            cout<<graph[i][j]<<" ";
        }
        cout<<"\n";
    }
    
    return 0;
}