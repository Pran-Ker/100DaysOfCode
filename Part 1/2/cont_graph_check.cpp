#include <bits/stdc++.h>
using namespace std;

const int N = 1e5+10;

vector<int> g[N];    // Stores tree
bool vis[N];

void dfs(int vertex){
    
    //once entered in vertex


    if(vis[vertex]){return;}
    vis[vertex] = true;

    for(int child : g[vertex]){

        g[child];

        //after child
    }

    //before exit vertex

}

int main(){
    int n, e;
    cin>>n>>e; // n is number of nodes and e is number of edges
    int v1, v2;
    
    int count; //counts number of continous graphs

    for(int i=0; i<e; i++){
        cin>>v1>>v2;
        g[v1].push_back(v2); 
        g[v2].push_back(v1);
    }
    
    for(int i=0; i<n; i++){
        if(vis[i]){continue;}      // if already traversed by dfs, then omite
        dfs(i);
        count++;
    }
    
    cout<<"continuous graphs present: "<<count;
    
    return 0;
}

/**
 *  Test Case:
8 5
1 2
2 3
2 4 
3 5 
6 7
**/