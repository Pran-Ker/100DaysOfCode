#define NOMINMAX
#include <bits/stdc++.h>
using namespace std;

const int N = 1e3+10;

vector<int> g[N];
bool vis[N];

void dfs(int vertex){
    
    //once entered in vertex

    cout<<vertex<<endl;

    if(vis[vertex]){return;}
    vis[vertex] = true;

    for(int child : g[vertex]){
        // before child
        cout<<"par"<< vertex << ", child "<< child;
        g[child];

        //after child
    }

    //before exit vertex

}

int main(){
    int n, m;
    cin>>n>>m; // n is number of nodes and m is number of edges
    int v1, v2;

    for(int i=0; i<9; i++){
        cin>>v1>>v2;
        g[v1].push_back(v2); // 1 is for non weighted graphs
        g[v2].push_back(v1);
    }
    
    dfs(g[0]);
    
    return 0;
}